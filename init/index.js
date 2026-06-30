const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

async function main(){
    await mongoose.connect("mongodb://localhost:27017/wanderlust");
}

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

async function initDB(){
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((listing) => ({
        ...listing,
        owner : "6a411a60927fc67c934056a0"
    }));
    await Listing.insertMany(initdata.data);
    console.log("Data Initialized");
}

initDB();