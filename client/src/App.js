import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import BookList from './comps/BookList';
import AddBook from './comps/AddBook';
import main from './scss/main.scss';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <div className="main_interface">
        <AddBook/>
        <BookList/>
      </div>
    </ApolloProvider>
  )
}

export default App;
