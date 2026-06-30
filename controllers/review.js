const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.createReview = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let review = new Review(req.body.review);
    review.author = req.user._id; 
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    res.redirect(`/listing/${id}`);
}

module.exports.deleteReview = async(req,res) => {
    const {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listing/${id}`);
}
