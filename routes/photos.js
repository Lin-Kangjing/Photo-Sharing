// var express = require('express');
// var router = express.Router();
const Photo = require('../models/Photo')
const fs = require('fs')
const path = require('path')
const join = path.join

exports.form = (req,res)=>{
  res.render('upload',{
    title:'Photo upload'
  })
}
exports.submit =(dir)=>{
  return (req,res,next)=>{
    const img = req.files.photo.image
    const name = req.body.photo.name || img.name
    const paht = join(dir,img.name)

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
  }
}
exports.list = (req,res,next)=>{
  console.log(11111111,Photo);
  Photo.find({},(err,photos)=>{
    if(err)return next(err)
    res.render('photos',{
      title:'Photos',
      photos:photos
    })
  })
  
}
