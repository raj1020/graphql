import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';


const getBooksQuery = gql `
query {
    books{
        name
        genre
        author{
            name
            age
        }
    }
}

`



function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div>
        <ul>
                     <li>First Item</li>
                     <li>Second Item</li>
                 </ul>
            
        </div>
    )
}

export default BookList

