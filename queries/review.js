const db = require("../db/dbConfig.js");

const getAllReviews = async (dimsums_id) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE dimsums_id=$1",dimsums_id);
    return allReviews;
  } catch (error) {
    return error;
  }
};

const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

const newReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, content, rating, dimsums_id) VALUES($1, $2, $3, $4) RETURNING *",
      [
        review.reviewer,
        review.content,
        review.rating,
        review.dimsums_id,
      ]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1, content=$2, rating=$3, dimsums_id=$4, where id=$5 RETURNING *",
      [
        review.reviewer,
        review.content,
        review.rating,
        review.dimsums_id,
        review.id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
};
