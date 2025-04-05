import express from "express";
import db from "./config/db.js"
import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";
import createUsersTable from "./db/createUsersTable.js";
import bodyParser from "body-parser";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(errorHandler);

// createUsersTable();

app.get("/",async(req,res)=>{
    const result = await db.query("SELECT current_database()")
    res.send(result.rows[0].current_database);
});

app.use("/api/v1/",userRoutes)


app.listen(PORT,()=>{
    console.info(`Server started at http://localhost:${PORT}`);
});