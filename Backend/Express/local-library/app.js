var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//define Mongoose
var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var bookSchema=schema({
  title:stringify,
  author:{type: Schema.Types.ObjectId, ref:'Author'},
  summary: String,
  ISBN: String,
  url: String
});
var authorSchema=Schema({
  name: String,
  lifespan: String,
  url: String,
  books: [{type: Schema.Types.ObjectId, ref:'Book'}]
});

var Book=mongoose.model('Book',bookSchema);
var Author=mongoose.model('Author',authorSchema); 
/*
CRUD

CREATE Operation
//create an instance of model somemodel
var awesome_instance=new SomeModel({name": 'awesome'});

//save the new model instance, passing a callback
awesome_instance.save(function(err){
  if(err) return handleError(err);
  //saved!
});
OR
SomeModel.create({name: 'also_awome'}, function(err,awesome_instance){
  if (err) return handleError(err);
  //saved
});

R - Read Operation

var breakfastmodel=mongoose.model("breakfast", breakfastSchema);
//find all breakfasts where the drink is "coffee"
breakfastmodel.find({"drink":"coffee"}, "eggs drink", function(err, breakfasts){
  if (err) return handleError(err);
  console.log(breakfasts);
})

var query=breakfast.find({"drink": "Coffee"}); or var query=breakfast.find().where("drink").equals("coffee");
query.select("eggs drink");
query.limit(5)
query.sort({eggs:-1});
query.exec(function(error,results){
  if(error) return handleError(error);
  console.log(results);
});


U - UPDATE Operation
//change record by modifying the fields then calling save()

awesome_instance.name="New cool name";
awesome_instance.save(function(err){
  if(err) return handleError(err);//saved
});


*/


Book.findOne({title: "The Jungle Book"});
Book.populate("author");
Book.exec(function(err,book){
  if(err) return handError(err);
  console.log(book.author.name);
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { stringify } = require('querystring');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Connection to Monogo DB
var app= express();
var mongoDB = "mongodb://127.0.01/local_library";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));




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
});

module.exports = app;
