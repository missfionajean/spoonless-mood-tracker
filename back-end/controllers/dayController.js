const Day = require("../models/dayModel");

// Get all days
exports.getDays = (req, res) => {
  Day.getAllDays((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get day by ID
exports.getDay = (req, res) => {
  User.getDayById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Day not found" });
    res.json(results[0]);
  });
};

// Create a new day
exports.createDay = (req, res) => {
  User.createDay(req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Day created", dayId: results.insertId });
  });
};

// Update day
exports.updateDay = (req, res) => {
  User.updateDay(req.params.id, req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Day updated" });
  });
};

// Delete day
exports.deleteDay = (req, res) => {
  User.deleteDay(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Day deleted" });
  });
};