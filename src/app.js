import express from "express";
import userRoutes from "./routes/UserRoutes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const port = process.env.PORT;



// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running on 10.150.238.233:${port}`);
});
