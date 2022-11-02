const express = require("express");
const app = express();
let notes = [
  {
    id: 1,
    content: "DORMIR EN LA NOCHE",
    date: "2022-05-30",
    important: true,
  },
  {
    id: 2,
    content: "ESTUDIAR EN LA MORNING",
    date: "2022-03-03",
    important: true,
  },
  {
    id: 3,
    content: "JUGAR EN EL ALMUERZO",
    date: "2022-04-28",
    important: false,
  },
];
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json " });
//   response.end(JSON.stringify(notes));
// });
app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});
app.get("/api/notes", (request, response) => {
  response.json(notes);
});
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
