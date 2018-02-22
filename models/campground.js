var mongoose = require("mongoose");

// Schema set-up
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String, 
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
       {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
       }
       
   ]
});
// schema is compiled to a model
module.exports = mongoose.model("Campground", campgroundSchema);