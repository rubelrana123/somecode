import { Model, Schema, model } from "mongoose";
import { IBooks   } from "./books.interface";

interface BooksModel extends Model<IBooks> {
  featuredBooks(): [];
}

 const BooksSchema = new Schema<IBooks, BooksModel>({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: {
      name: { type: String, required: true },
      location: { type: String, required: true },
    },
    reviews: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
      },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required:true}
     
    
  });
  // interface UserModel extends Model<IUser, {}, IUserMethods> {
  //   createWithFullName(name: string): Promise<HydratedDocument<IUser, IUserMethods>>;
  // }

  BooksSchema.static("featuredBooks", function featuredBooks() {
    return this.find({ rating: { $gte: 4 } });
  });
  // BooksSchema.statics.featuredBooks = function( ) {
  //   return this.find({ rating: { $gte: 4 } });

  // };

  const Books = model<IBooks, BooksModel>('Books', BooksSchema);
 
   export default Books;