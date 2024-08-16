import fs from 'node:fs';
import logger from '../logger.js';
import { fileURLToPath } from "url";
import {dirname, join} from 'path';
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFilePath = join(__dirname, '../../data.json')


// Path to the JSON file
// const dataFilePath = '../../data.json';

// Function to read the current users from the JSON file
export function readUsersFromFile()  {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        const jsonData = JSON.parse(data);
        
        // Ensure that jsonData is an array and contains a users key
        if (Array.isArray(jsonData) && jsonData.length > 0 && jsonData[0].users) {
            return jsonData[0].users;
        } else {
            return [];
        }
    } catch (err) {
        console.error('Error reading the file:', err);
        return [];
    }
};

// Function to write the users back to the JSON file
export function writeUsersToFile(users) {
    try {
        console.log(users[users.length -1]);

        // Wrap the users in an array and add a users key
        const jsonData = [{ users }];
        fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
        console.log(jsonData);
        logger.info("kullanıcı kaydedildi!");
    } catch (err) {
        logger.warn(err);
        console.error('Error writing to the file:', err);
    }
};

// Function to delete a user by ID from the JSON file
export function deleteUserByIdFromFile(userId) {
    try {
        // Read the current users from the file
        const users = readUsersFromFile();

        // Filter out the user with the specified ID
        const updatedUsers = users.filter(user => user.id !== userId);

        // Write the updated users back to the file
        writeUsersToFile(updatedUsers);
    } catch (err) {
        console.error('Error deleting the user:', err.message);
    }
}

// Function to update a user by ID in the JSON file
export function putUserByIdToFile(userId, updatedUser) {
    try {
        // Read the current users from the file
        const users = readUsersFromFile();

        // Find the index of the user to update
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        // Update the user at the found index
        users[userIndex] = { ...users[userIndex], ...updatedUser };

        // Write the updated users back to the file
        writeUsersToFile(users);
    } catch (err) {
        console.error('Error updating the user:', err.message);
    }
}