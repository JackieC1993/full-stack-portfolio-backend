const db = require('../db/dbConfig.js');





const getAllDimSums = async () => {
    try {
        const allDimSums = await db.any('SELECT * FROM dimsums');
        return allDimSums;
    } catch (error) {
        return error;
    }
}

const getDimSumsById = async (id) => {
    try {
        const dimsum = await db.one('SELECT * FROM dimsums WHERE id = $1', [id]);
        return dimsum;
    } catch (error) {
        return error;
    }
}

const createDimSums = async (dimsums) => {
    try {
        const newDimSums = await db.one('INSERT INTO dimsums (name, price, ingredient,description, quantity, savory, size) VALUES ($1, $2, $3,$4, $5, $6, $7,) RETURNING *', [dimsums.name, dimsums.price, dimsums.ingredient, dimsums.description, dimsums.quantity, dimsums.savory, dimsums.size]);
        return newDimSums;
    } catch (error) {
        return error;
    }
}

const updateDimSums = async (id, dimsums) => {
    try {
        const updatedDimSums = await db.one('UPDATE dimsums SET name = $1, price= $2, ingredient = $3, description = $4, quantity = $5,  savory =$6  size = $7 WHERE id = $8 RETURNING *', [dimsums.name, dimsums.price, dimsums.ingredient, dimsums.description, dimsums.quantity, dimsums.savory, dimsums.size, id]);
        return updatedDimSums;
    } catch (error) {
        return error;
    }
}

const deleteDimSums = async (id) => {
    try {
        const deletedDimSums = await db.one('DELETE FROM dimsums WHERE id = $1 RETURNING *', [id]);
        return deletedDimSums;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllDimSums,getDimSumsById,createDimSums, updateDimSums,deleteDimSums};