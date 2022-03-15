import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
  },
  password: String,
});
export default mongoose.model('User', UserSchema);
// lowercase: true,
// required: [true, "can't be blank"],
// match: [/\S+@\S+\.\S+/, 'is invalid'],
// index: true,
// unique: true,
