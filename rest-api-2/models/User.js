import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  passwordHash: { type: String, required: true },
});
userSchema.methods.setPassword = async function (password) {
  this.passwordHash = await bcrypt.hash(password, 10);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

export default mongoose.model("User", userSchema);
