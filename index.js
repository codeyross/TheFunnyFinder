const express = require('express');
const res = require('express/lib/response');
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'hbs');


const Venue = require('./models/venue-model.js');
var bodyParser = require("body-parser");
const { del } = require('express/lib/application');
const async = require('hbs/lib/async');
const { connection } = require('./db/connection');
// const path = require('path');
// const bootstrap = require('bootstrap');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
// app.engine('handlebars', exphbs());


function showVenues (req, res) {
  var venueFinder = Venue.find() 
  // console.log(venueFinder)
  return venueFinder
  }
  function createVenues (req, res) {

    console.log(req.body)
    var myForm = req.body
    var name = (myForm.name == null ? "" : myForm.name)
    var location = (myForm.location == null ? "" : myForm.location)
    var url = (myForm.URL == null ? "" : myForm.URL)
    var details = (myForm.details == null ? "" : myForm.details)
    var detailArray = details.split(',').map(val => val.trim())
    var venueShower = Venue.create({name: name, location: location, url: url, details: detailArray})
    return venueShower
  }
  function deleteVenues (req, res) {
   
    console.log(req.body)
    var myForm = req.body 
    var name = (myForm.name == null ? "" : myForm.name)
    var location = (myForm.location == null ? "" : myForm.location)
    var URL = (myForm.URL == null ? "" : myForm.URL)
    var details = (myForm.details == null ? "" : myForm.details)
    var venueShower = Venue.findOneAndDelete({name: {$regex: name, $options: 'i'}, location: {$regex: location, $options: 'i'}, URL: {$regex: URL, $options: 'i'}, details: {$regex: details, $options: 'i'}})
    
    return venueShower
  }
  
  function searchVenues (req, res) {
    console.log(req.body)
    var myForm = req.body
    var name = (myForm.name == null ? "" : myForm.name)
    var location = (myForm.location == null ? "" : myForm.location)
    var URL = (myForm.URL == null ? "" : myForm.URL)
    var details = (myForm.details == null ? "" : myForm.details)
      var venueShower = Venue.find({name: {$regex: name, $options: 'i'}, location: {$regex: location, $options: 'i'}, URL: {$regex: URL, $options: 'i'}, details: {$regex: details, $options: 'i'}});
    return venueShower
  }
  function editVenues (req, res) {
    console.log(req.body)
    var myForm = req.body
    var name = (myForm.name == null ? "" : myForm.name)
    var location = (myForm.location == null ? "" : myForm.location)
    var URL = (myForm.URL == null ? "" : myForm.URL)
    var details = (myForm.details == null ? "" : myForm.details)
    var nameTwo = (myForm.nameTwo == null ? "" : myForm.nameTwo)
    var locationTwo = (myForm.locationTwo == null ? "" : myForm.locationTwo)
    var URLTwo = (myForm.URLTwo == null ? "" : myForm.URLTwo)
    var detailsTwo = (myForm.detailsTwo == null ? "" : myForm.detailsTwo)
    var update = {};
    if(nameTwo != "")update.name = nameTwo
    if(locationTwo != "")update.location = locationTwo
    if(URLTwo != "")update.URL = URLTwo
    if(detailsTwo != "")update.details = detailsTwo
      var venueShower = Venue.findOneAndUpdate({name: {$regex: name, $options: 'i'}, location: {$regex: location, $options: 'i'}, URL: {$regex: URL, $options: 'i'}, details: {$regex: details, $options: 'i'}}, update);
    return venueShower
  }

  app.get('/', (req, res)=> {
    res.render('venues/main')
  });

app.get('/venues', (req, res) => {
  Venue.find({})
  .then((venues) => {
    res.render('venues/index', {Venues: venues});
  })
  .catch(console.error);
});
app.get('/search', (req, res) => {
   
    res.render('venues/search');
});

app.post('/search', (req, res) => {
searchVenues(req, res) 
.then((venues) => {
  res.render('venues/index', {Venues: venues});
})
});
app.get('/create', (req, res) => {
   
  res.render('venues/create');
});
app.post('/create', (req, res) => {
  createVenues(req, res)
  .then(() => {
    res.redirect('/venues');
  })
  .catch(console.error);
});

app.get('/delete', (req, res) => {
   
  res.render('venues/delete');
});
app.post('/delete', (req, res) => {
  deleteVenues(req, res)
  .then((venues) => {
    res.render('venues/goodbye', {Deleted: venues});
  })
  .catch(console.error);
});
app.get('/edit', (req, res)=> {
  res.render('venues/edit')
});
app.post('/edit', (req, res) => {
  editVenues(req, res)
  .then(() => {
    res.redirect(303, '/venues');
  })
  .catch(console.error);
});



app.set("port", process.env.PORT || 8000);

// app.get('/test', (req, res) => {
//   res.send('a-ok')
// })

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
