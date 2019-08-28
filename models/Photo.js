var mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name:String,
  path:String
})
module.exports = mongoose.model('Photo',schema)