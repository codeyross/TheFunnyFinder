const { $where } = require("./models/venue-model");

const viewDetails = document.getElementById('view-btn');
const editVenue = document.getElementById('edit-btn');
const deleteVenue = document.getElementById('delete-btn');

let currentEdit = ''

function editModal (venue) {
    $('#modal-edit').modal('open')
    const nameEdit = document.getElementById('name-edit')
    const locationEdit = document.getElementById('location-edit')
    const imgEdit = document.getElementById('img-edit')
    const urlEdit = document.getElementById('url-edit')
    const detailEdit = document.getElementById('detail-edit')

    nameEdit.value = venue.name
    locationEdit.value = venue.location
   imgEdit.value = venue.img
    urlEdit.value = venue.url
    detailEdit.value = venue.detail

    currentEdit = venue._id
}