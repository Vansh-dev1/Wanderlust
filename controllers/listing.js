const Listing = require("../models/listing.js");

module.exports.index = async (req,res) => {
   const allListing = await Listing.find({});
   res.render("listing/index.ejs", {allListing});
}

module.exports.showListing = async (req,res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews", populate: {path: "author"}}).populate("owner");
    if(!listing){
        req.flash("error", "Listing not found");
       return res.redirect("/listing");
    }
    res.render("listing/show.ejs", {listing});
}

module.exports.createListing = async (req,res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listing");
}

module.exports.renderNewForm = (req,res) => {
    res.render("listing/new.ejs");
}

module.exports.editListing = async (req,res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/edit.ejs", {listing});
}

module.exports.updateListing = async (req,res) => {
    if(!req.body.listing){
        throw new Errors(400, "Invalid Listing");
    }
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);

    if(req.file){
        let url = req.file.path;
        let filename = req.file.filename;
        await Listing.findByIdAndUpdate(id, {image : {url, filename}});
    }
    

    res.redirect(`/listing/${id}`);
}

module.exports.deleteListing = async (req,res) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
}

module.exports.searchListing = async(req, res) => {
    const {location} = req.query;
    if(!location){
        req.flash("error", "Please enter location");
        return res.redirect("/listing");
    }

    const listings = await Listing.find({
    $or: [
        {
            location: {
                $regex: location,
                $options: "i"
            }
        },
        {
            title: {
                $regex: location,
                $options: "i"
            }
        },
        {
            country: {
                $regex: location,
                $options: "i"
            }
        }
    ]
});
    res.render("listing/search.ejs", {allListing: listings, location});
}
