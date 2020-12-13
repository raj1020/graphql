import { gql } from '@apollo/client';


const getBooksQuery = gql `
query {
    books{
        name
        genre
        id
        author{
            name
            age
        }
    }
}

`

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





export {getAuthorsQuery, getBooksQuery};