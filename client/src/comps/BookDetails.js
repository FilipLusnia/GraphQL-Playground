import React from 'react';
import {useQuery} from '@apollo/client';
import {getBookQuery} from '../queries/queries';

export default function BookDetails(props) {

    const {data: detailedBook} = useQuery(getBookQuery,{
      variables:{
        id: props.BookData
      }
    });

    const displayDetails = () =>{
      if(detailedBook?.book){
        const {book} = detailedBook;
        return(
          <div>
            <p>Szczegóły książki:</p>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>Książki napisane przez tego autora: </p>
            <ul>
              {book.author.books.map(e=>{
                return <li key={e.id}>{e.name}</li>
              })}
            </ul>
          </div>
        )
      } else{
        return(
          <h3>Wybeirz książkę, której szczegóły chcesz poznać.</h3>
        )
      }
    }
  
    return (
      <div className="book_details">
        {displayDetails()}
      </div>
    )
}

