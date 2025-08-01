import express from "express";
import cors from "cors"
// import cookieParser from "cookie-parser"
import todoRoutes from './routes/todoRoutes.js';

const app = express();
app.use(express.json()); 

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended:true, limit:"16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser())

app.use("/api", todoRoutes);

export default app
