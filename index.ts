import express from 'express'
const port = 4000;
const app = express()

import studentRoute from "./routes/studentRoute"


app.use(express.json())
app.use("/s1",studentRoute)



app.listen(port,()=>console.log("server is on"))