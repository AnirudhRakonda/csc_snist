import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    username :{type :String, required : true,},
    email: { type: String, required: true },
    password: { type: String, required: true },
    branch: { type: String, required: true },
    rollNo :{type : String, required : true},
    year: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);
