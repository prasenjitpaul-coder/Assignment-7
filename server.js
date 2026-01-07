import express from "express";
import dotenv from"dotenv";
import RoutesTask from "./routes/RoutesTask.js"
dotenv.config();




const app = express();


//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



//routes  
app.use("/api/task", RoutesTask)

//Server   PORT 5000
app.listen(process.env.PORT, () =>{
    console.log("Port!!")
})


export default app;