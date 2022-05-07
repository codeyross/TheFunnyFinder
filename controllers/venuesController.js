// const express = require('express');
// const { append } = require('express/lib/response');
// // const methodOverride = require('method-ovveride');
// const Venue = require('../models/venue-model');

// const router = express.Router();

// // app.use(methodOverride('_method'));

// function showVenues (req, res) {
//     var venueFinder = Venue.find() 
//     // console.log(venueFinder)
//     return venueFinder
//     }
//     function createVenues (req, res) {
     
//       console.log(req.body)
//       var myForm = req.body
//       var name = myForm.name 
//       var location = myForm.location
//       var url = myForm.url
//       var details = myForm.details
//       var venueShower = Venue.create({name: name, location: location, url: url, details: details})
//       return venueShower
//     }
//     function deleteVenues (req, res) {
     
//       console.log(req.body)
//       var myForm = req.body
//       var name = myForm.name 
//       var location = myForm.location
//       var url = myForm.url
//       var details = myForm.details
//       var venueShower = Venue.findOneAndDelete({name: name, location: location, url: url, details: details})
//       return venueShower
//     }
// router.get('/', (req, res) => {
//         Venue.find({}).then((items) => res.send(items));

//   router.get('/venues', (req, res) => {
//     showVenues(req, res)
//     .then((venues) => {
//       res.render('venues/index', {venues});
//     })
//     .catch(console.error);
//   });
//   router.get('/create', (req, res) => {
     
//       res.render('venues/create');
//   });
//   router.post('/create', (req, res) => {
//     createVenues(req, res)
//     .then(() => {
//       res.redirect(303, '/venues');
//     })
//     .catch(console.error);
//   });
  
//   router.get('/delete', (req, res) => {
     
//     res.render('venues/delete');
//   });
//   router.delete('/delete/:id', (req, res) => {
//    const id = req.params.id;
//    Venue.findOneAndRemove({_id: id})
//     .then(() => {
//       MessageEvent('Venue Deleted!')
//       res.redirect(303, '/venues');
//     })
//     .catch(console.error);
//   });



// });


 
// module.exports = router