let express = require("express"),
     app = express (),
     bodyParser = require("body-parser"),
     mongoose = require("mongoose"),
     Campground = require("./models/campground.js"),
     Comment = require("./models/comment.js"),
     seedDB = require("./seeds.js"),
     passport = require("passport"),
     localStrategy =require("passport-local"),
     User =require("./models/user"),
     passportLocalMongoose = require("passport-local-mongoose"),
     methodOverride = require("method-override"), 
     flash = require("connect-flash");
     
let commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");
    
let url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url);
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// seedDB(); //seed the db

app.locals.moment = require("moment");

// passport config
app.use(require("express-session")({
    secret: "Elämä on laiffii",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flash());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server is on!")
});