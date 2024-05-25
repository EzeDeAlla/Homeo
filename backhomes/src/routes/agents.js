const { Router } = require('express');
const router = Router();
const { Agent, Propertie } = require('../db');
const { allAgents } = require('../controllers/controllers');

router.get('', async (req, res) => {
    try {
        const agents = await allAgents();
        res.status(200).send(agents);
    } catch(err) {
        res.status(400).send({ message: err });
    }
});

router.post('', async (req, res) => {
    try {
      const { id, name, description, image } = req.body;
      
      if (!name || !description) { throw new Error('Faltan Datos Requeridos') };

      const newAgent = await Agent.create({
        id,
        name,
        description,
        image,
      });

      res.status(200).send(newAgent);

    } catch(err) {
        res.status(400).send({ message: err.message });
    }
});

module.exports = router;