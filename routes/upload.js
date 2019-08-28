const express = require('express')
const router = express.Router()
const path = require('path');
const Photo = require('../models/Photo')

router.get('/from',(req,res)=>{
    res.render('photos/upload',{
      title:'Photo upload'
    })
  })
  
router.post('/from',(req,res,next)=>{
    // const img = req.files.photo.image
    // const name = req.body.photo.name || img.name
    console.log(app)
    const dir = app.get('photos')
    console.log(app.get)
    console.log(dir)
    const path = join(dir,img.name)
    fs.rename(img.path,path,(err)=>{
      if(err) return next(err)
      Photo.creat({
        name:name,
        path:img.name
      },(err)=>{
        if(err) return next(err)
        res.redirect('/')
      })
    })
})
module.exports = router
