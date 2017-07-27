let mongoose = require("mongoose");

// MOdel creation and validation
let BucketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be blank"],
      minlength: [5, "Titile should be at least 10 characters"]
    },

    description: {
      type: String,
      required: [true, "Description cannot be blank"],
      minlength: [5, "Description should be at least 5 characters"]
    },

    isdone: {
      type: Boolean
    },

    //  name of the user who liked it
    user: {
      type: String
    },

    userselected: {
      type: String
    }
  },
  { timestamps: true }
);

mongoose.model("Bucket", BucketSchema);
