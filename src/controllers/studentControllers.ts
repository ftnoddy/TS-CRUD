import { Request, Response, NextFunction } from 'express';
import Student from '../models/Students';
import asyncHandler from '../middleware/asyncHandler';



// Get all students
export const getStudents = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const students = await Student.find();
    res.json(students);
  });
  
  // Create a new student
  export const createStudent = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { name, dob, email, phone, stream, marks, universityId, universityName, branch, degreeLevel, degree, specialization, projectWork, certifications } = req.body;
  
    const student = new Student({
      name,
      dob,
      email,
      phone,
      stream,
      marks,
      universityId,
      universityName,
      branch,
      degreeLevel,
      degree,
      specialization,
      projectWork,
      certifications
    });
  
    const createdStudent = await student.save();
    res.status(201).json(createdStudent);
  });

  