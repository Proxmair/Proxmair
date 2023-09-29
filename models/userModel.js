import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter User Name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Enter Password"],
  },
  profilePic: {
    type: String,
    required: false,
    default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  isOnline:{
    type:Boolean,
    default:true,
    required:false,
  },
  socketId:{
    type:String,
    required:false
  }
}, { timestamps: true });
export const User = mongoose.models.User ||mongoose.model("User", userSchema);

export default User;