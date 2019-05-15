var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
// var authenticate = require('./authenticate')
// var nodemailer = require('nodemailer');
// var flash = require('connect-flash');
// var fs = require('fs');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
var solutionRouter = require('./routes/solutionRouter');
var studyRouter = require('./routes/studyRouter');

// über diese Route können vorhandene Tasks in Datenbank eingepflegt werden
var insertTaskRouter = require('./routes/insertTaskRouter');

//Connection zu Datenbank und ODM mongoose
const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/kreativDB';
// const connect = mongoose.connect(url, { useNewUrlParser: true });
// connect.then((db) => {
//     console.log("Connected correctly to server");
// }, (err) => { console.log(err); });

const uri = "mongodb+srv://Marcel:marcel94@test-cluster-m3jtf.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

mongoose.set('useCreateIndex', true);


//App
const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Anlegen einer Session für Zuordnung einer Lösung zu einer Versuchsperson
app.use(session({
  name: 'VP',
  secret: 'visitacion31',
  //cookie:{expires: new Date(Date.now()+1*3600*1000)},
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/solution', solutionRouter);
app.use('/study', studyRouter);

app.use('/insertTasks', insertTaskRouter);



// //LogIn Barrier
// function auth(req, res, next) {

//   if (!req.user) {
//     var err = new Error('You are not authenticated!');
//     err.status = 403;
//     next(err);
//   }
//   else {
//     next();
//   }
// }

// app.use(auth);

//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/study', studyRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
