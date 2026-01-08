

export class StudentResponse {
    id? :number
    name: string
    email:string
    role: "STUDENT" | "TEACHER"

    constructor(id:number,name:string,email:string,role:"STUDENT" | "TEACHER"){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role
    }
}

