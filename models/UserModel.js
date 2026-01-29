import mongoose from "mongoose";

const userSchema = new mongoose.schema(
  {
    name: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true },
    cartData: { type: object, default: {} },
  },
  { minimize: false },
);
const userMOdel = mongoose.model.user || mongoose.model("user", userSchema);

export default userMOdel;