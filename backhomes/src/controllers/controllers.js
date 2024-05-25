require('dotenv').config();
const axios = require('axios');
const router = require('../routes');
const { Propertie, Agent } = require('../db');


const dbBases = async () => {
    try {
        const dbBases = await Propertie.findAll({
            include: {
                model: Agent,
                attributes: ['id', 'name'],
                through: {
                    attributes: [],
                },
            }
        });
        return dbBases;
    } catch(err) {
        return ('No created Propertie founded', err);
    }
};

const allAgents = async () => {
    try {
        const agents = await Agent.findAll({
            include: {
                model: Propertie,
                attributes: ['id', 'name', 'zone', 'price', 'description', 'image', 'houseType'],
            }
        });
        return agents;
    } catch(err) {
        return ('No Agents Founded', err);
    }
};

module.exports = {
    dbBases,
    allAgents,
};