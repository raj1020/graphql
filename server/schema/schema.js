const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');


const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;



const BookType = new GraphQLObjectType ({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // //console.log("parent1 =",parent);
                // return _.find(authors, {id: parent.authorId});
            }
        }
       
    })
});
const AuthorType = new GraphQLObjectType ({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //console.log("parent1 =",parent);
                //return _.filter(books, {authorId: parent.id})
            }
            }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db or from other source.
                //console.log("parent2 =", parent);
                //return _.find(books, {id: args.id});

            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db or from other source.
                //console.log("parent3 =", parent);
               //return _.find(authors, {id: args.id});

            }
        },
         books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                //return authors;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});


