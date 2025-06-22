import { data } from "../utils/data";

export const fetchStudents = async (): Promise<any> => {


    try {
        const response = await fetch(`https://localhost:3000/students`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Assuming the response is in JSON format
        return await  response.json();
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }

}

const createStudent = async (student: any): Promise<any> => {
  const response = await fetch(`https://localhost:3000/students`, {
    method: 'POST',
    
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
      },
  });

  return await response.json();
}
