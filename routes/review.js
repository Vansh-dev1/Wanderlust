const express = require("express");
const router = express.Router({mergeParams: true});
const {reviewSchema} = require("../schema.js");
const Errors = require("../utils/ExpressErrors.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js")

const validateReview = (req,res,next) => {
    let result = reviewSchema.validate(req.body);
    if(result.error){
        throw new Errors(400, result.error);
    }
    next();
}

//Review Route
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.createReview))

//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewController.deleteReview))

module.exports = router;