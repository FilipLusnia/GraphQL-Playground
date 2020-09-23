import React from 'react';
import {gql, useQuery} from '@apollo/client';

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

export default function App() {

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
