import dotenv from "dotenv"
dotenv.config()
import express from "express"
import notesRoute from "./routes/notesRoute.js"
import connectDB from "./config/db.js"
import rater from "./middlewares/rateLimiter.js"
const PORT = process.env.PORT || 5001
const app = express() //express app instance
app.use(express.json())//req.body parser middleware
app.use("/api/notes",rater)//ratelimit handler middleware
// Route hnadler middleware
app.use("/api/notes",notesRoute)
//Error handler middleware
app.use((err,req,res,next)=>{
    return res.status(500).json({message: "Internal server error",error: err.message});
})
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT} PORT`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB. Server not started.", err);
});