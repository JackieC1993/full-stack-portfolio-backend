// Dependencies
const express = require("express");
//child model gets mergeParams
const reviews = express.Router({mergeParams: true});

const { getDimSumsById} = require("../queries/DimSums");


// Queries
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/review");

// INDEX
reviews.get("/", async (req, res) => {
  const { dimsums_id } = req.params;
  const allReviews = await getAllReviews(dimsums_id);

  const dimsums = await getDimSumsById(dimsums_id)

  if (dimsums.id) {
    res.status(200).json({...dimsums, allReviews});
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
reviews.get("/:id", async (req, res) => {
  const {dimsums_id, id} = req.params;
  const review = await getReview(id);
  const dimsums = await getDimsum(dimsums_id);

  if (review) {
    res.json({...dimsums, review});
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id, dimsums_id } = req.params;
  const updatedReview = await updateReview({dimsums_id, id, ...req.body});
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});
//Create
reviews.post("/", async (req, res) => {
  const { dimsums_id} = req.params;
  const review = await newReview({dimsums_id,...req.body});
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

module.exports = reviews;

