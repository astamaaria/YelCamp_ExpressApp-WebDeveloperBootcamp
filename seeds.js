let mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
let data =[
    {
        name: "Riverside Cabin",
        image:"https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a14ca13b83f7bce82764a45d13576418&auto=format&fit=crop&w=1400&q=80",
        description: "Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri ja Eero. Ovat heistä Tuomas ja Aapo kaksoispari ja samoin Timo ja Lauri. Juhanin, vanhimman veljen, ikä on kaksikymmentä ja viisi vuotta, mutta Eero, nuorin heistä, on tuskin nähnyt kahdeksantoista auringon kierrosta. Ruumiin vartalo heillä on tukeva ja harteva, pituus kohtalainen, paitsi Eeron, joka vielä on kovin lyhyt. Pisin heistä kaikista on Aapo, ehkä ei suinkaan hartevin. Tämä jälkimmäinen etu ja kunnia on Tuomaan, joka oikein on kuuluisa hartioittensa levyyden tähden. Omituisuus, joka heitä kaikkia yhteisesti merkitsee, on heidän ruskea ihonsa ja kankea, hampunkarvainen tukkansa, jonka karheus etenkin Juhanilla on silmään pistävä."
    },
    {
        name : "Quirang - Scotland", 
        image : "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-0.3.5&s=a2da2fdfca7823edd9d6b6a523aac361&auto=format&fit=crop&w=1267&q=80", 
        description : "Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri ja Eero. Ovat heistä Tuomas ja Aapo kaksoispari ja samoin Timo ja Lauri. Juhanin, vanhimman veljen, ikä on kaksikymmentä ja viisi vuotta, mutta Eero, nuorin heistä, on tuskin nähnyt kahdeksantoista auringon kierrosta. Ruumiin vartalo heillä on tukeva ja harteva, pituus kohtalainen, paitsi Eeron, joka vielä on kovin lyhyt. Pisin heistä kaikista on Aapo, ehkä ei suinkaan hartevin. Tämä jälkimmäinen etu ja kunnia on Tuomaan, joka oikein on kuuluisa hartioittensa levyyden tähden. Omituisuus, joka heitä kaikkia yhteisesti merkitsee, on heidän ruskea ihonsa ja kankea, hampunkarvainen tukkansa, jonka karheus etenkin Juhanilla on silmään pistävä.!"
    },
    {
        name: "Misty Mountains", 
        image:"https://c1.staticflickr.com/6/5512/11803348376_4480464643_b.jpg",
        description: "Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri ja Eero. Ovat heistä Tuomas ja Aapo kaksoispari ja samoin Timo ja Lauri. Juhanin, vanhimman veljen, ikä on kaksikymmentä ja viisi vuotta, mutta Eero, nuorin heistä, on tuskin nähnyt kahdeksantoista auringon kierrosta. Ruumiin vartalo heillä on tukeva ja harteva, pituus kohtalainen, paitsi Eeron, joka vielä on kovin lyhyt. Pisin heistä kaikista on Aapo, ehkä ei suinkaan hartevin. Tämä jälkimmäinen etu ja kunnia on Tuomaan, joka oikein on kuuluisa hartioittensa levyyden tähden. Omituisuus, joka heitä kaikkia yhteisesti merkitsee, on heidän ruskea ihonsa ja kankea, hampunkarvainen tukkansa, jonka karheus etenkin Juhanilla on silmään pistävä."
    }
    ]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function (err){
        // if (err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!")
        // data.forEach(function(seed){
        //     Campground.create(seed, function (err, campground){
        //         if (err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground")
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "The place is awesome but a toilet would be create!",
        //                     author: "Elsa"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     }else {
        //                         campground.comments.push(comment._id);
        //                         campground.save();
        //                         console.log("A comment created!")
        //                     }
                            
        //                 });
        //         }
        //     });
        // });
    });
   
}

module.exports = seedDB;


// let Comment   = require("./models/comment");



// function seedDB(){
//   //Remove all campgrounds
//   Campground.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//         Comment.remove({}, function(err) {
//             if(err){
//                 console.log(err);
//             }
//             console.log("removed comments!");
//              //add a few campgrounds
//             data.forEach(function(seed){
//                 Campground.create(seed, function(err, campground){
//                     if(err){
//                         console.log(err)
//                     } else {
//                         console.log("added a campground");
//                         //create a comment
//                         Comment.create(
//                             {
//                                 text: "This place is great, but I wish there was internet",
//                                 author: "Homer"
//                             }, function(err, comment){
//                                 if(err){
//                                     console.log(err);
//                                 } else {
//                                     campground.comments.push(comment._id);
//                                     campground.save();
//                                     console.log("Created new comment");
//                                 }
//                             });
//                     }
//                 });
//             });
//         });
//     }); 
//     //add a few comments
// }

// module.exports = seedDB;