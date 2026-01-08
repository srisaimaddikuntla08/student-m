
import { Router } from "express"
import { createStudent,getAllStudents } from "../controllers/studentController";

const route = Router();

route.post("/create",createStudent);
route.get("/getAllStudents",getAllStudents)

export default route