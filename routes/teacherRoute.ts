
import { Router } from "express"
import { createTeacher, getTeacher } from "../controllers/teacherController";

const route = Router();

route.post("/create",createTeacher);
route.get("/get",getTeacher);


export default route