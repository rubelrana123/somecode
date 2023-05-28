  import express  from "express";
import { allBook, getGenreBooks, getTopRated, updatesAllBooksPrice } from "./books.controller";
 
 
const router = express.Router();

router.get("/", allBook);
router.get("/genre", getGenreBooks);
router.get("/getTopRated", getTopRated);
router.get("/price", updatesAllBooksPrice);

// router.get("/:id", getUserById );
// router.post("/create-user", createUser)

export default router;  