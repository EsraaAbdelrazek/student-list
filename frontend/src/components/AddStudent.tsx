import { type Student } from "../utils/data.ts";
import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { Paper, TextField, Button } from "@mui/material";

interface Props {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>;
}

const initialState = { id: 999, fullName: "", age: 0, email: "", class: "", year: "" };

export const AddStudent = ({ setStudents, students }: Props) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "age" ? Number(value) : value, // Convert age to a number
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const data = await createStudent(formData);
    setStudents([...students, data]);
    setFormData(initialState); // Reset form
  };

  return (
    <Paper
      sx={{
        width: 1100,
        margin: "auto",
        marginTop: 5,
        padding: 4,
        gap: 1,
        display: "flex",
        flexDirection: "column",
        border: 2,
        borderColor: "#BDBDBD",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
        value={formData.fullName}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Age"
        name="age"
        variant="outlined"
        value={formData.age}
        onChange={handleChange}
        type="number" // Ensure numeric input
      />
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Class"
        name="class"
        variant="outlined"
        value={formData.class}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Paper>
  );
};

async function createStudent(formData: Student): Promise<Student> {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...formData, id: Date.now() });
    }, 1000);
  });
}
