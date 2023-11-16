const express = require("express");
const { getAllDimSums, getDimSumsById, createDimSums, deleteDimSums, updateDimSums } = require("../queries/DimSums");
const dimsumsRouter = express.Router();
const { checkName, checkBoolean } = require('../validations/checkDimSums')


dimsumsRouter.get("/", async (req, res) => {
  const allDimSums = await getAllDimSums();
  if (getAllDimSums[0]) {
    res.status(200).json(getAllDimSums);
  } else {
    res.status(500).json({ error: "server error" });
  }
});


dimsumsRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
    const oneDimSums = await getDimSumsById(id);
    if (oneDimSums) {
        res.status(200).json(oneDimSums);
        } else {
            res.status(404).json({ error: 'Not Found' });     
    }
})

dimsumsRouter.post('/',checkName,checkBoolean, async (req, res) => {
    const body = req.body
    const color = await createDimSums(body);
    res.status(200).json(color)
})
dimsumsRouter.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const deletedDimSums = await deleteDimSums(id);
    if (deletedDimSums) {
        res.status(200).json(deletedDimSums)
        } else {
            res.status(404).json({ error: 'Dim Sums Not Found' });         
        }
    });

dimsumsRouter.put("/:id",checkName, checkBoolean, async (req, res) => {
    const {id} = req.params;
    const body = req.body
    const updatedDimSums = await updateDimSums(id, body);
    res.status(200).json(updateDimSums)
})
    

module.exports = dimsumsRouter

