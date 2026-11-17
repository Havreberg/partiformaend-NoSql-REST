const personService = require("../services/personService");

async function getPerson(req, res) {
    const findPeople = await personService.getPerson()
    return res.status(200).json(findPeople);
}

async function getMinister(req, res) {
    const findMinisters = await personService.getMinisters();
    return res.status(200).json(findMinisters);
}

async function getChairPeople(req, res) {
    const findChairPeople = await personService.getChairPeople();
    return res.status(200).json(findChairPeople);
}

async function getPersonById(req, res) {
    const findPersonById = await personService.getPersonById(req.params.id);
    return res.status(200).json(findPersonById);
}

async function createPerson(req, res) {
    const createPerson = await personService.createPerson(req.body);
    return res.status(201).json(createPerson);
}

async function updatePerson(req, res){
    const updatedPerson = await personService.updatePerson(req.params.id, req.body);
    return res.status(200).json(updatedPerson);
}

async function deletePerson(req, res) {
    const deletedPerson = await personService.deletePerson(req.params.id);
    return res.status(200).json(deletedPerson);
}

module.exports = {
    getPerson,
    getMinister,
    getChairPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};
