const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const Errors = require("./utils/ExpressErrors.js");
const {listingSchema,reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req,res,next) => {
    // console.log(req.user);
    if(!req.isAuthenticated()){
        //req.originalUrl
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if (!res.locals.currUser || !listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listing/${id}`);
    }
    next();
}

module.exports.validateListing = (req,res,next) => {
    let result = listingSchema.validate(req.body);
    if(result.error){
        throw new Errors(400, result.error);
    }
    next();
}

module.exports.isAuthor = async (req,res,next) => {
    const {id, reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if (!res.locals.currUser || !review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listing/${id}`);
    }
    next();
}
