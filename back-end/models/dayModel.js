const db = require("../config/database");

// Get all users
exports.getAllDays = callback => {
  db.query("SELECT * FROM days", callback);
};

// Get user by ID
exports.getDayById = (id, callback) => {
  db.query("SELECT * FROM days WHERE id = ?", [id], callback);
};

// Create new user
exports.createDay = (userData, callback) => {
  db.query("INSERT INTO days SET ?", userData, callback);
};

// Update user
exports.updateDay = (id, userData, callback) => {
  db.query("UPDATE days SET ? WHERE id = ?", [userData, id], callback);
};

// Delete user
exports.deleteDay = (id, callback) => {
  db.query("DELETE FROM days WHERE id = ?", [id], callback);
};