import mongoose, { Document, Schema } from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';

interface IStudent extends Document {
  name: string;
  dob: Date;
  email: string;
  phone: string;
  stream: string;
  marks: number;
  universityId: string;
  universityName: string;
  branch: string;
  degreeLevel: 'undergraduate' | 'postgraduate';
  degree: string;
  specialization: string;
  projectWork?: string;
  certifications?: string[];
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  stream: { type: String, required: true },
  marks: { type: Number, required: true },
  universityId: { type: String, required: true },
  universityName: { type: String, required: true },
  branch: { type: String, required: true },
  degreeLevel: { type: String, enum: ['undergraduate', 'postgraduate'], required: true },
  degree: { type: String, required: true },
  specialization: { type: String, required: true },
  projectWork: { type: String },
  certifications: { type: [String] },
});

const Student = mongoose.model<IStudent>('Student', StudentSchema);

export default Student;
