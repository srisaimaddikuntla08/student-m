import { prisma } from "../db";
import { Student } from "../dto/Student";
import  type {Request,Response} from "express";

export const createStudent = async (req:Request,res:Response)=>{

    const {name,email,role} = req.body;


    //student dto to !show model data
    const student = new Student(
        name,
        email,
        role
    );

    try{
            const data = await prisma.user.create({
                data:{
                    name:student.name,
                    email:student.email,
                    role:student.role
                }
            })

            return res.status(201).json({success:true,data})
    }catch(error:any){

        console.error(error)

        return  res.json({message:error.message})

    }
}