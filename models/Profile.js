const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 15
  },
  location: {
    type: String
  },
  equipment: {
    type: [String]
  },
  stash: [{}],
  website: {
    type: String
  },
  score: {
    type: Number
  },
  achievments: [
    {
      name: { type: String, required: true },
      points: { type: Number, required: true },
      image: { type: String, required: true },
      date: { type: Date, required: true, default: Date.now }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    snapchat: {
      type: String
    },
    spotify: {
      type: String
    },
    soundcloud: {
      type: String
    },
    bandcamp: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
