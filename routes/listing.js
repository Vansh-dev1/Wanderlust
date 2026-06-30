const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


const listingController = require("../controllers/listing.js");

//Index Route
//Create Route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(upload.single("listing[image]"), validateListing, isLoggedIn, wrapAsync(listingController.createListing))

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show Route
//Update Route
//Delete Route
router 
    .route("/:id")
    .get( wrapAsync(listingController.showListing))
    .put(upload.single("listing[image]"),isOwner, validateListing, wrapAsync(listingController.updateListing))
    .delete(isOwner, wrapAsync(listingController.deleteListing));

//Edit Route
router.get("/:id/edit", validateListing, isLoggedIn, isOwner, wrapAsync(listingController.editListing));

module.exports = router;