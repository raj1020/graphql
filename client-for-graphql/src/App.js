import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook';


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
     cache: new InMemoryCache( ),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
      <h1>Here are the things I will do using GRAPHQL</h1>
      <BookList />
      <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
