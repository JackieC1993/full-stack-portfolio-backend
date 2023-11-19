// Dependencies
const express = require("express");
//child model gets mergeParams
const reviewController = express.Router({mergeParams: true});

const { getDimSumsById} = require("../queries/DimSums");


// Queries
const {
  getDimSumsById,
  getallDimSums,
  newDimSums,
  deleteDimSums
  updateDimSums,
} = require("../queries/DimSums");

// INDEX
dimsums.get("/", async (req, res) => {
  const { dimsums_id } = req.params;
  const getallDimSums = await getallDimSums(dimsums_id);

  const dimsums = await getDimSumsById(dimsums_id)

  if (all[0]) {
    res.status(200).json({...dimsums, allDimSums});
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
dimsums.get("/:id", async (req, res) => {
  const {dimsums_id, id} = req.params;
  const dimsum = await getDimSumsReview(id);
  const dimsums = await getDimSumsById(dimsums_id);

  if (review) {
    res.json({...bookmark, review});
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id, bookmark_id } = req.params;
  const updatedReview = await updateReview({bookmark_id, id, ...req.body});
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

reviews.post("/", async (req, res) => {
  const { bookmark_id, id } = req.params;
  const review = await newReview({bookmark_id,...req.body});
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});


module.exports = reviewController;

