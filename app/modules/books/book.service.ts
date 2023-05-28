 
import Books from "./book.model";
import { IBooks } from "./books.interface";

 

export const getBooksFromDb = async() : Promise<IBooks[]> =>{
 
    // const books = await Books.find({genre : "Fantasy"});
    const books = await Books.find({genre : "Sci-Fi","publisher.name" : "Roli Books"});
    console.log('service find books', books)
    return books;
   }
export const getSpecificBooksFromDb = async() : Promise<IBooks[]> =>{
   
    const books = await Books.find({genre : "Fantasy"});
    console.log('service find books', books)
    return books;
   }
    
  export  const getRatedBookFromDB = async () : Promise<IBooks[]> =>  {
     const topRatedBooks =   Books.featuredBooks();
     const books  = Books.aggregate([
       
          {
      $addFields: {
        featured: {
          $cond: [
            { $gte: ['$rating', 4.5] },
            'BestSeller',
            {
              $cond: [
                { $gte: ['$rating', 4] },
                'Popular', 
                  ' '
              ],
            },
          ],
        },
      },
    },
 


    
    ])
    //  console.log(topRatedBooks)
     return books;

   }



   export const getUpdatePriceFromDb = async (): Promise<IBooks[]> => {
    const books = await Books.aggregate([
      { $match: { publicationYear: { $gt: 2020 } } },
      {
        $addFields: {
          price: {
            $toDouble: "$price",
          },
        },
      },
    ]);
    return books;
  };