const express = require("express");
const bodyParser = require("body-parser");
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

// Liste alles Tasks zurückgeben
router.get("/", (request, response) => {
    response.status(200).json(tasksArray);
})

// Einen Task hinzufügen und zurückgeben
let currentId = 6; // 6 weil 5 Tasks vordefiniert sind

router.post("/", (request, response) => {
    const { Title, Beschreibung, DueDate, ResolvedDate } = request.body;

    if(!Title || !Beschreibung || !DueDate || !ResolvedDate) {
        return response.status(422).send("Bitte Titel, Beschreibung, DueDate und ResolvedDate mitgeben!");
    }

    const newTask = {
        Id: currentId++,
        Title: Title,
        Beschreibung: Beschreibung,
        DueDate: DueDate,
        ResolvedDate: ResolvedDate
    };

    tasksArray.push(newTask);
    response.sendStatus(201).json(newTask);
});

// Einen bestimmten Task zurückgeben
router.get('/:Id', (request, response) => {

    const byId = request.params.Id;
    const taskId = tasksArray.find(tasks => tasks.Id == byId);

    if(taskId) {
        response.status(200).json(taskId);
    } else {
        response.status(404).json({ message: "Task nicht gefunden!"})
    }
})

// Einen Task ersetzen, aber nur wenn ID existiert
router.put('/:Id', (request, response) => {

    const byId = request.params.Id;
    const taskId = tasksArray.findIndex(tasks => tasks.Id == byId);

    if(taskId !== -1) {
        tasksArray[taskId] = { ...tasksArray[taskId], ...request.body };
        response.status(200).json(tasksArray[taskId]);
        console.log(tasksArray);
    } else {
        response.status(404).json({ message: "Task nicht gefunden!" });
    }

    console.log(tasksArray);
})

// Task teilweise aktualisieren, aber nur wenn ID existiert
router.patch('/:Id', (request, response) => {
    const byId = request.params.Id;
    const taskIndex = tasksArray.findIndex(task => task.Id == byId);

    if(taskIndex !== -1) {
        if(request.body.Id) {
            tasksArray[taskIndex].Id = request.body.Id;
        }
        if(request.body.Title) {
            tasksArray[taskIndex].Title = request.body.Title;
        }
        if(request.body.Beschreibung) {
            tasksArray[taskIndex].Beschreibung = request.body.Beschreibung;
        }
        if(request.body.DueDate) {
            tasksArray[taskIndex].DueDate = request.body.DueDate;
        }
        if(request.body.ResolvedDate) {
            tasksArray[taskIndex].ResolvedDate = request.body.ResolvedDate;
        }

        response.status(200).json(tasksArray[taskIndex]);
        console.log(tasksArray);
    } else {
        response.status(404).json({ message: "Task nicht gefunden!" });
    }
})

// Task löschen, aber nur wenn ID existiert
router.delete('/:Id', (request, response) => {
    const byId = request.params.Id;
    const taskIndex = tasksArray.findIndex(task => task.Id == byId);

    if(taskIndex !== -1) {
        tasksArray.splice(taskIndex, 1);
        response.status(200).json({ message: "Task erfolgreich gelöscht!" });
    } else {
        response.status(404).json({ message: "Task nicht gefunden!" });
    }
});


module.exports = router;