var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose') 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const photos = require('./routes/photos')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('photos',path.join(__dirname, '/public/images/photos'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/photos', photos.list);
app.get('/upload',photos.form)
app.post('/upload',photos.submit(app.get('photos')))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

const port = 4000

mongoose.connect('mongodb://localhost/photo_app',function(err){
  if(err){
    console.log('数据库连接失败');
  }else{
    console.log('数据库连接成功');
    app.listen(port, () => {
      console.log(`server running @ http://localhost:${port}`);
    });
  }
})


module.exports = app;
