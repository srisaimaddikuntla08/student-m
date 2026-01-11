import { connect } from "bun";
import { prisma } from "../db";

import  type {Request,Response} from "express";

export const createTeacher = async (req:Request,res:Response)=>{

        const {email}=  req.body 
        try{
            if(!email) return res.status(401).json({message:"filed required"});

            const teacher = await prisma.teacher.create({
                data:{
                    email,
                    student : {
                        create :[
                            {
                                name : "sai",
                                email :"sai@gmail.com"
                            },
                            {
                                name : "sri",
                                email :"sri@gmail.com"
                            }
                        ]
                    }
                } as any,
                include : {
                    student : true
                },
            })


            return  res.status(201).json({data : teacher})

        }catch(err:any){
            console.error(err.message);
            return res.status(500).json({message:err.message})
        }
   
}


export const getTeacher = async (req:Request,res:Response)=>{
    try{
        const teachers = await prisma.teacher.findMany({
            include :{
                student: true
            }
        })

        res.json({teachers});
    }catch(err:any){
            console.error(err.message)
            res.status(501).json({message: err.message})
    }
}