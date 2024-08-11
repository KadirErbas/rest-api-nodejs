import express from "express";
import userRoutes from "./routes/UserRoutes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
