import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';


const getAuthorsQuery = gql `
query {
    authors{
        name
        age
        id
        books{
            name
            genre
        }
    }
}
`


function AddBook() {
   const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    //console.log(data.authors);

   const displayAuthors = ()=>{
        
       
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        
    }
    return (
        <div>

        <ul>
                   <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        { displayAuthors() }
                    </select>
                </div>
                <button>+</button>

            </form>

                </ul>
       
       
            
        </div>
    )
}

export default AddBook
