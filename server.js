var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

mongoose.Promise = Promise;
var app = express();

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(express.static(process.cwd() + "/public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoosearticles";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(MONGODB_URI);
}

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection sucessful.");
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = express.Router();

require("./config/routes")(router);

app.use(router);

var port = process.env.PORT || 3030;

app.listen(port, function() {
  console.log("app running on port " + port);
});