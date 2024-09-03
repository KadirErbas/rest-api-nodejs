import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import User from "./models/User.js";
import Account from "./models/Account.js";
import Branch from "./models/Branch.js";
import Employee from "./models/Employee.js";
import Loan from "./models/Loan.js";
import Transaction from "./models/Transaction.js";
import Card from "./models/Card.js";


import routes from "./routes/index.js";
import logRoutes from './logreader/LogReader.js';


const app = express();
dotenv.config();
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// Test database connection and synchronize tables
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");
     
    await User.sync({ force: true });
    await Account.sync({ force: true });
    await Branch.sync({ force: true });
    await Employee.sync({ force: true });
    await Loan.sync({ force: true });
    await Transaction.sync({ force: true });
    await Card.sync({ force: true });
    
    console.log("All tables created successfully.");
    
  } catch (error) {
      console.error("Error creating tables: ", error);
  } 
  /*
  finally {
      await sequelize.close();
  }
  */
})();


app.use('/api', routes);
app.use('/logs', logRoutes)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});