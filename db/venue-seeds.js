const Venue = require('../models/venue-model');
const seedData = require('./venue-seeds.json');

Venue.deleteMany({})
.then(() => {
    return Venue.insertMany(seedData);

})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit();
});