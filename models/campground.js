let mongoose = require("mongoose");

// Schema set-up
let campgroundSchema = new mongoose.Schema({
   name: String,
   price: Number,
   image: String, 
   description: String,
   createdAt: {type:Date, default: Date.now},
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