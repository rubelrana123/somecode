  import { NextFunction, Request, Response } from "express";
import { getBooksFromDb, getRatedBookFromDB, getSpecificBooksFromDb, getUpdatePriceFromDb } from "./book.service";
 
 ;
//task 2 get all books func
 export const allBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await getBooksFromDb();
    console.log("allbook",book)
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };


  //task 3get specific genre books function
 export const getGenreBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await getSpecificBooksFromDb();
    // console.log("genrebook",book)
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };
  //task 4 get top rated function
 export const getTopRated = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await getRatedBookFromDB();
    console.log("getTopratedBooks",book)
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };

  //task 5 update all books price function
  export const updatesAllBooksPrice = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await getUpdatePriceFromDb();
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };
  