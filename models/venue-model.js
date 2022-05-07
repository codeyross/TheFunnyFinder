const mongoose = require('../db/connection');

const VenueSchema = new mongoose.Schema(
    {
        name: String,
            location: String, 
            img: String,
            url: String,
            details: [String]   
        }
)
const Venue = mongoose.model("Venue", VenueSchema);

module.exports = Venue;
