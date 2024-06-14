const express = require("express");
const router = express.Router();


router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const tasksArray = [
    {"Id": 1, "Title": "Task1", "Beschreibung": "Nur ein Test", "DueDate": "14.6.2024", "ResolvedDate": "null"},
    {"Id": 2, "Title": "Task2", "Beschreibung": "Eine weitere Aufgabe", "DueDate": "15.6.2024", "ResolvedDate": "null"},
    {"Id": 3, "Title": "Task3", "Beschreibung": "Noch eine Aufgabe", "DueDate": "16.6.2024", "ResolvedDate": "null"},
    {"Id": 4, "Title": "Task4", "Beschreibung": "Aufgabe vier", "DueDate": "17.6.2024", "ResolvedDate": "null"},
    {"Id": 5, "Title": "Task5", "Beschreibung": "Letzte Aufgabe", "DueDate": "18.6.2024", "ResolvedDate": "null"},
];






module.exports = router;