import React from 'react';
import {useQuery} from '@apollo/client';
import {getBooksQuery} from '../queries/queries';





function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    //console.log(data.books);

    function displayBooks(){
        
       
            return data.books.map(book => {
                return(
                    <li key={ book.id }>
                        <b>Book name</b>: { book.name }, 
                        <b>Genre</b>: { book.genre }, 
                        <b>Author</b>: { book.author.name }, 
                        <b>Age of Author</b>: { book.author.age }, 
                    </li>
                );
            })
        
    }
    return (
        <div>

        <ul>
                    { displayBooks() }
                </ul>
       
       
            
        </div>
    )
}

export default BookList

