import { HydratedDocument, Model } from "mongoose";

export interface IBooks {
    title: string;
    author: string[];
    genre: string;
    publicationYear: number;
    publisher: {
      name: string;
      location: string;
    };
    reviews: {
      user: string;
      comment: string;
    }[];
    rating: number;
    price: string;
  }
  export interface IBooksMethods {
    retrieveBooks(): string;
  }
  // export interface BookModel extends Model<IBooks> {
  //   getTopRatedBook(): IBooks[];
  // }

  export interface BooksModel extends Model<IBooks, {}, IBooksMethods> {
    getgetTopratedBooksTopRate(): Promise<HydratedDocument<IBooks, IBooksMethods>>;
  }
