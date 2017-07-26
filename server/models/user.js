let mongoose = require("mongoose");

// MOdel creation and validation
let UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank"]
    },

    question: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: " Question"
      }
    ],

    answer: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: " Question"
      }
    ]
  },
  { timestamps: true }
);

mongoose.model("User", UserSchema);
