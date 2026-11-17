const person = require("../models/personModel");

function notFoundError() {
    const error = new Error("Person blev ikke fundet.");
    error.status = 404;
    return error;
}

async function getPerson() {
    return person.find();
}

async function getMinisters() {
    return person.find({ position: "minister" });
}

async function getChairPeople(){
    return person.find({ position: "formand" });
}

async function getPersonById(id) {
    const foundPerson = await person.findById(id);
    if (!foundPerson) { throw notFoundError(); }
    return foundPerson;
}

async function createPerson(data){
    return person.create(data);
}

async function updatePerson(id, data){
    const foundPerson = await person.findByIdAndUpdate(id, data, {
    returnDocument: "after", runValidators: true });
    if (!foundPerson) { throw notFoundError(); }
    return foundPerson;
}

async function deletePerson(id) {
    const foundPerson = await person.findByIdAndDelete(id);
    if (!foundPerson) { throw notFoundError(); }
    return foundPerson;
}

module.exports = { getPerson, getMinisters, getChairPeople, getPersonById, createPerson, updatePerson, deletePerson };