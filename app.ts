import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
import booksRoutes from "./app/modules/books/book.route";

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/books", booksRoutes);

export default app;