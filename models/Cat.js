var mongoose = require('mongoose')

var CatSchema = new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  id: mongoose.SchemaTypes.String,
  transponderNr: mongoose.SchemaTypes.String,
  adoptable: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  house: mongoose.SchemaTypes.String,
  room: mongoose.SchemaTypes.String,
  kennel: mongoose.SchemaTypes.String,
  inShelterSince: mongoose.SchemaTypes.Date,
  race: mongoose.SchemaTypes.String,
  color: mongoose.SchemaTypes.String,
  sex: mongoose.SchemaTypes.String,
  spayedOrNeutered: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  dateOfBirth: mongoose.SchemaTypes.Date,
  escapologist: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  aggressive: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  assertive: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  nervous: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  outdoorCat: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  toiletTrained: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  acuteDiseases: mongoose.SchemaTypes.String,
  chronicDiseases: mongoose.SchemaTypes.String,
  medication: mongoose.SchemaTypes.String,
  nutrition: mongoose.SchemaTypes.String,
  otherTreatments: mongoose.SchemaTypes.String,
  freeTextInfo: mongoose.SchemaTypes.String
})

module.exports = mongoose.model('Cat', CatSchema)
