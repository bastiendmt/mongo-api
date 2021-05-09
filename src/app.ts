import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import * as bookController from "./controllers/bookController";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Endpoints
app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getbook);
app.put("/book", bookController.addBook);
app.delete("/book/:id", bookController.deleteBook);
app.post("/book/:id", bookController.updateBook);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});
