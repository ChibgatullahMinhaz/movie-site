import express from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound.js";
import path from 'path'
import router from "./app/routes/index.js";
// import connectDB from "./app/config/db.js";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import globalErrorHandler from "./app/middlewares/globalErrorHandler.js";
import './cron/banCron.js';

dotenv.config();

// // connecting db
// connectDB();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
//parser
app.use(express.json());


// @ serve static 
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


app.use(
    cors({
        origin: "*",
        credentials: true,

    })
);

//routes
app.use("/api", router);
//routes
app.use(globalErrorHandler);

app.get("/", (req, res) => {
    res.send("Hello From Home route😉 end pont prefix is '/api'");
});

app.use(notFound);

export default app;
