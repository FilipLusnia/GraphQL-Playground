import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import BookList from './comps/BookList';
import AddBook from './comps/AddBook';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  )
}

export default App;
