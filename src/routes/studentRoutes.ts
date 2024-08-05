import express from 'express';
import { getStudents, createStudent } from '../controllers/studentControllers';


const router = express.Router();

router.route('/students').get(getStudents).post(createStudent);

export default router;