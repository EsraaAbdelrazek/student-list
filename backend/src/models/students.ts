import mongoose , {Schema , Document }from "mongoose";

interface IStudent extends Document { 
    fullname : string;
    email: string;
    age: number;
    grade : string; 
}


const studentSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String },
    email: { type: String, required: true, unique: true } // Ensure email is unique
});

export const studentModel = mongoose.model('Student', studentSchema);

