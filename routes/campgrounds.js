var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var methodOverride = require("method-override");
var middleware = require("../middleware");



router.get("/", function (req, res){
    // get campgrounds from db
    Campground.find({}, function (err, allCampgrounds){
        if (err){
            console.log(err)
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });  
});

router.get("/new", middleware.isLoggedIn, function(req, res) {
   res.render("campgrounds/new.ejs"); 
});

router.post("/", middleware.isLoggedIn, function (req, res) {
    // get data from the db and add to campgrounds array 
   var name = req.body.name;
   var price = req.body.price;
   var image = req.body.image;
   var description = req.body.description;
   var author = {id: req.user._id, username: req.user.username}
   var newCampGround = {name: name, price: price, image: image, description: description, author: author}
   // create a new campground and save to db
   Campground.create(newCampGround, function (err, newlyCreated){
       if (err){
          console.log(err); 
       }else {
           console.log(newlyCreated)
           res.redirect("/campgrounds")
       }
   });
   
});

router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err || !foundCampground){
          console.log(err);
          req.flash("error", "The Campground does not exist")
          res.redirect("back") 
       } 
       console.log(foundCampground);
       res.render("campgrounds/show", {campground: foundCampground});
    });
});

router.get("/:id/edit", middleware.isLoggedIn, middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            req.flash("error", "The campground doesn't exist");
            res.redirect("back");
        } else {
           res.render("campgrounds/edit", {campground: foundCampground});
        }
    });    
});

router.put("/:id", middleware.isLoggedIn, middleware.checkCampgroundOwnership, function (req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds")
       } else{
           res.redirect("/campgrounds/"+updatedCampground._id);
       }
    });
});

router.delete("/:id",middleware.isLoggedIn, middleware.checkCampgroundOwnership, function (req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/campgrounds/");
       } else{
           res.redirect("/campgrounds");
       }
   }); 
});


module.exports = router;
