const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = 4000;

express()
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())

  // REST endpoints
  .get("/test", (req, res) => res.send("This is a test"))

  // array of events in objects
  .get("/events", (req, res) => res.send("Get Events"))

  // object with details
  .get("/events/:id", (req, res) => res.send("Get one event by the id"))

  // array of objects ->
  .get("/events/:eventId/meetings", (req, res) =>
    res.send("Get the list of meetings for the given an event (eventId)")
  )

  // if the context is "home" it will display one array of menu options and if context is "events it will display another"
  .get("/menu/:context", (req, res) =>
    res.send(
      "Get the list menus for the given context (context = ‘home|events’)"
    )
  )

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
