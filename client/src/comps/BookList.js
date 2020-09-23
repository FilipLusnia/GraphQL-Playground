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

  const {loading, error, data} = useQuery(getBooksQuery)

  console.log(data)

  return (
    <div>
        <ul>
            <li>
                book
            </li>
        </ul>
    </div>
  )
}
