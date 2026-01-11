import express from 'express'
const port = 4000;
const app = express()

import studentRoute from "./routes/studentRoute"
import teacherRoute from './routes/teacherRoute'


app.use(express.json())
app.use("/s1",studentRoute)
app.use("/t1",teacherRoute)




app.listen(port,()=>console.log("server is on"))