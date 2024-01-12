const reviewRouter=require("express").Router()
const Review=require('../Controllers/reviewCont.js')


reviewRouter.get('/getreviews/:offerid',Review.getReviews)
reviewRouter.post('/addreview', Review.createReview);
reviewRouter.put('/updatereview/:idrev', Review.updateReview);
reviewRouter.delete('/deletereview/:idrev', Review.deleteReview);
module.exports=reviewRouter