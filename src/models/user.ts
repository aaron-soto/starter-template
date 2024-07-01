import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  logins: {
    type: Number,
    default: 1
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'dev']
  }
}, { timestamps: true })

userSchema.methods.incrementLogins = function () {
  this.logins += 1;
  return this.save();
};

const User = models.User || mongoose.model('User', userSchema)
export default User