import type { User } from "../generated/prisma/client";

import { StudentResponse } from "../dto/Student";


export const tostudentResponse  = (user:User)=>{
    return new StudentResponse(
        user.name,
        user.email,
        user.role
    )
}