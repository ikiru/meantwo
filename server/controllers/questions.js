let mongoose = require("mongoose");
let Bucket = mongoose.model("Bucket");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    Bucket.find({}, function(err, bucket) {
      if (err) {
        return res.json(err);
      }
      return res.json(bucket);
    });
  },

  // Create a question => sends to DB <= newly created question
  create: function(req, res) {
    Bucket.create(req.body, function(err, bucket) {
      if (err) {
        return res.json(err);
      }
      return res.json(bucket);
    });
  },


update: function(req, res){
  Bucket.findbyIdAndUpdate(req.params.id, function(err, bucket){
    if (err) {
      return res.json(err);
    }
    return res.json(bucket);
  })
}


// .populate ({
//   path: 'answer',
//   model: 'Answer',
//   populate:{
//     path: 'user',
//     model:'User'
//   }
// // })
