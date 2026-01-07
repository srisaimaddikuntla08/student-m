import type { Student } from "../generated/prisma/client";

import { StudentResponse } from "../dto/Student";


export const tostudentResponse  = (student:Student)=>{
    return new StudentResponse(
        student.name,
        student.email,
        student.role
    )
}