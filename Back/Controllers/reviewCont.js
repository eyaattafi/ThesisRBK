const Review=require('../Models/review.js')


async function getReviews(req, res) {
    try {
      const reviews = await Review.findAll({ where: { offerIdoffer: req.params.offerid } });
      res.status(200).json(reviews)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createReview(req, res) {
    try {
      const review= await Review.create(req.body);
      res.status(201).json(review);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function updateReview(req, res) {
    try {
     
      const review = await Review.update(req.body, {
        where: {idreviews : req.params.idrev},
      });
      res.json(review)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function deleteReview(req, res) {
    try {
     
      const review= await Review.destroy({
        where: {idreviews  : req.params.idrev},
      });
      res.json(review)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  module.exports = {
    getReviews,
    createReview,
    updateReview,
    deleteReview
  };
