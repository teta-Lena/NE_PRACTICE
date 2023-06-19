const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    default: null,
  },
  lname: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    private: true,
  },

  userrole: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  // roles:[{type:String,default:user}]
});

// userSchema.plugin(toJSON);
// userSchema.plugin(paginate);

userSchema.plugin(paginate);

const User = mongoose.model("User", userSchema);

module.exports = User;
