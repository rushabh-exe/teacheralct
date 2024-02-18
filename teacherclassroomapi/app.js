const express = require('express');
const app = express();

const teachers = [
    "Teacher 1",
    "Teacher 2",
    "Teacher 3",
    "Teacher 4",
    "Teacher 5",
    "Teacher 6",
    "Teacher 7",
    "Teacher 8",
    "Teacher 9",
    "Teacher 10",
    "Teacher 11",
    "Teacher 12",
    "Teacher 13",
    "Teacher 14",
    "Teacher 15",
    "Teacher 16",
    "Teacher 17",
    "Teacher 18",
    "Teacher 19",
    "Teacher 20"
];

const availableclassroom = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110",'202'];

app.get('/api/teachers', (req, res) => {
    res.json(teachers);
});

app.get('/api/classrooms', (req, res) => {
    res.json({ availableclassroom });
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
