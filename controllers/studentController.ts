import { prisma } from "../db";

import  type {Request,Response} from "express";
import { tostudentResponse } from "../mappers/studentMapper";

export const createStudent = async (req:Request,res:Response)=>{

    const {name,email,role} = req.body;

    try{
            const data = await prisma.user.create({
                data:{
                    name,
                    email,
                    role
                }
            })

            const response = tostudentResponse(data);
            return res.status(201).json({success:true,response:response})
            
    }catch(error:any){

        console.error(error)

        return  res.json({message:error.message})

    }
}


