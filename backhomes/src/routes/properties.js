const { Router } = require('express');
const router = Router();
const { dbBases } = require('../controllers/controllers');
const { Propertie, Agent } = require('../db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

router.get('/uploads/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '..', '..', 'uploads', filename);
    console.log(`Requesting file: ${filePath}`);
    
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('filename',req.params.filename);
            console.error(`File not found: ${filePath}`);
            return res.status(404).send('File not found');
        }
        res.sendFile(filePath);
    });
});

router.get('', async(req, res) => {
    try{
    const Bases = await dbBases();
    res.status(200).send(Bases);
    } catch (err) {
        res.status(400).send(err);
        console.log('error => ', err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const id  = req.params.id;
        const properties = await dbBases();

        if(id) {
            const filterId = await properties.filter((e) => e.id == id);
            filterId.length
            ? res.status(200).send(filterId)
            : res.status(400).send('Id del producto no encontrada');
        }
    } catch (err) {
        res.status(400).send('error =>', err);
    }
});

router.post('', upload.array('images', 10), async (req, res) => {
    try{
        const { name, zone, price, description, houseType, agentId } = req.body;
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

        if ( name && zone && price && description && imagePaths.length > 0 ) {
            const newBase = await Propertie.create({
                name,
                zone,
                price,
                description,
                image: imagePaths.join(','),
                houseType,
            });
            if (agentId) {
            await newBase.addAgent(agentId);
            }
            res.status(200).send(newBase);
        } else { throw new Error('required data is empty'); };
    } catch(err) {
        res.status(400).send({mesage: err.message});
    }
});

router.delete('/:id', async(req, res) => {
    try {
      const { id } = req.params;
      const propertie = await Propertie.findByPk(id);
      if (propertie !== null) {
        await Propertie.destroy({
            where: { id, },
        });
        res.sendStatus(200);
      } else { throw new Error('id does not exist'); }
    } catch (err){
        return res.status(400).send({ message: err.message });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { name, zone, price, description, image } = req.body;
        const propertie = await Propertie.findByPk(id);

        propertie.name = name;
        propertie.zone = zone;
        propertie.price = price;
        propertie.description = description;
        propertie.image = image;
        
        propertie.save();
        res.status(200).send(propertie);
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
});

module.exports = router;