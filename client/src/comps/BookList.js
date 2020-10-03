import React, {useState} from 'react';
import BookDetails from './BookDetails';
import {useQuery} from '@apollo/client';
import {getBooksQuery} from '../queries/queries';

export default function BookList() {

  const {data, loading} = useQuery(getBooksQuery)
  const [selected, setSelected] = useState();

  return (
    <div className="booklist_conatiner">
      <h1>Moje książki: </h1>
      {loading ? 
        <div> Ładuję książki... </div> 
      :
        <ul>
            {data.books.map(item => 
              <li 
                key={item.id} 
                onClick={e => setSelected(item.id)} 
                className="booklist_item"
              >{item.name}</li>
            )}
        </ul>
      }
      <BookDetails BookData={selected}/>
    </div>
  )
}
