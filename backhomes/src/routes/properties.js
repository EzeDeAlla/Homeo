const { Router } = require('express');
const router = Router();
const { dbBases } = require('../controllers/controllers');
const { Propertie, Agent } = require('../db');

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

router.post('', async (req, res) => {
    try{
        const { name, zone, price, description, image, houseType, agentId } = req.body;
        
        if ( name && zone && price && description && image ) {
            const newBase = await Propertie.create({
                name,
                zone,
                price,
                description,
                image,
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