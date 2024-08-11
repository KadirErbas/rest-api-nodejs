import express from "express";
import { readUsersFromFile, writeUsersToFile, deleteUserByIdFromFile, putUserByIdToFile } from "../controllers/UserControllers.js";

const router = express.Router();

// POST route to add a new user
router.post('/users', (req, res) => {
    const newUser = req.body;

    // Validate the incoming data (basic validation)
    if (!newUser.username || !newUser.email) {
        return res.status(400).json({ message: 'Username and email are required' });
    }

    // Read the current users from the JSON file
    const users = readUsersFromFile();

    // Ensure users is an array before pushing
    if (Array.isArray(users)) {
        users.push(newUser);

        // Write the updated users back to the JSON file
        writeUsersToFile(users);

        // Send a success response
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } else {
        res.status(500).json({ message: 'Internal server error: users data is not an array' });
    }
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    try {
        deleteUserByIdFromFile(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT route to update a user by ID
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    try {
        putUserByIdToFile(userId, updatedUser);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// GET route to retrieve all users
router.get('/users', (req, res) => {
    const users = readUsersFromFile();

    // Send the users as a JSON response
    res.status(200).json(users);
});

// Dummy GET route for the root path
router.get('/', (req, res) => {
    res.status(200).json({"deneme":"Api çalışıyor!"});
});

export default router;
