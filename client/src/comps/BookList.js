import React from 'react';
import {useQuery} from '@apollo/client';
import {getBooksQuery} from '../queries/queries';

export default function BookList() {

  const {data, loading} = useQuery(getBooksQuery)

  return (
    <div>
      <h1>Moje książki: </h1>
      {loading ? 
        <div> Ładuję książki... </div> 
      :
        <ul>
            {data.books.map(e => 
              <li key={e.id}>{e.name}</li>
            )}
        </ul>
      }
    </div>
  )
}
