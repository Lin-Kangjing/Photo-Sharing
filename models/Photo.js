import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/photo_app')

const schema = new mongoose.Schema({
  name:String,
  path:String
})

export default mongoose.model('Photo',schema)