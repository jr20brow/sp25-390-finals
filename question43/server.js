const express = require("express");
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("./chinook.db");
const app = express();
app.use(express.json());

// Test route: list all tables in the database
app.get('/tables', (req, res) => {
const stmt = db.prepare(
"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
);
res.json(stmt.all());
});
app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});

app.get("/artists/:id/tracks", (req, res) => {
    const stmt = db.prepare(`
SELECT *
FROM Tracks
WHERE Album.ArtistId = ?
`);
    const tracks = stmt.all(req.params.id);
    if (tracks.length === 0) {
        return res.status(404).json({ error: "No tracks found" });
    }
    res.json(tracks);
});