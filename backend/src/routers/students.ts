import express, { Request, Response, RequestHandler } from "express";
import { studentModel } from "../models/students";

const router = express.Router();

// GET all students
router.get('/', async (req: Request, res: Response) => {
  try {
    const students = await studentModel.find();
    res.send(students);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
});

// POST create a new student
router.post('/', async (req: Request, res: Response) => {
  try {
    const newStudent = new studentModel(req.body);
    await newStudent.save();
    res.status(201).send(newStudent);
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).send({ error: 'Duplicate email' });
    } else {
      res.status(400).send({ error: error.message });
    }
  }
});

// PUT update student by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedStudent = await studentModel.findByIdAndUpdate(id, updatedData, {
      new: true,        // return the updated document
      runValidators: true, // validate against schema
    });

    if (!updatedStudent) {
      res.status(404).send({ error: 'Student not found' });
      return;
    }

    res.send(updatedStudent);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});

// DELETE student by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      res.status(404).send({ error: 'Student not found' });
      return;
    }

    res.send({ message: 'Student deleted successfully' });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
});

export default router;