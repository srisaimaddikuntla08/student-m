
export class StudentResponse {
    name: string
    email:string
    role: "STUDENT" | "TEACHER"

    constructor(name:string,email:string,role:"STUDENT" | "TEACHER"){
        this.name = name;
        this.email = email;
        this.role = role
    }
}

