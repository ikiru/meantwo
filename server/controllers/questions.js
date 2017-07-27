let mongoose = require("mongoose");
let Question = mongoose.model("Question");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    question.find({}, function(err, question) {
      if (err) {
        return res.json(err);
      }
      return res.json(question);
    });
  },

  // Create a question => sends to DB <= newly created question
  create: function(req, res) {
    Question.create(req.body, function(err, question) {
      if (err) {
        return res.json(err);
      }
      return res.json(question);
    });
  },


update: function(req, res){
  Question.findbyIdAndUpdate(req.params.id, function(err, question){
    if (err) {
      return res.json(err);
    }
    return res.json(question);
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
