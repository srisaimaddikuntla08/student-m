import express from "express"
import { Router } from "express"
import { createStudent } from "../controllers/studentController";

const route = Router();

route.post("/create",createStudent);

export default route