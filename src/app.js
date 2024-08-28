import express from "express";
import dotenv from "dotenv";
// import bodyParser from "body-parser";

import sequelize from "./config/database.js";
import User from "./models/User.js";
import Account from "./models/Account.js";
import Branch from "./models/Branch.js";
import Employee from "./models/Employee.js";
import Loan from "./models/Loan.js";
import Transaction from "./models/Transaction.js";
import Card from "./models/Card.js";

import userRoutes from "./routes/UserRoutes.js";
import accountRoutes from "./routes/AccountRoutes.js";
import branchRoutes from "./routes/BranchRoutes.js";
import employeeRoutes from "./routes/EmployeeRoutes.js";
import loanRoutes from "./routes/LoanRoutes.js";
import transactionRoutes from "./routes/TransactionRoutes.js";
import cardRoutes from "./routes/CardRoutes.js";

import logRoutes from './logreader/LogReader.js'

const app = express();
dotenv.config();
const port = process.env.PORT;

// app.use(bodyParser.urlencoded({ extended: false }));
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

// Use routers
app.use('/api', userRoutes);
app.use('/api', accountRoutes);
app.use('/api', branchRoutes);
app.use('/api', employeeRoutes);
app.use('/api', loanRoutes);
app.use('/api', transactionRoutes);
app.use('/api', cardRoutes);

app.use('/logs', logRoutes)



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});