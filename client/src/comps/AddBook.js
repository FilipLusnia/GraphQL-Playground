import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';

export default function AddBook() {

    const {data: authorsList, loading} = useQuery(getAuthorsQuery);
    const [addNewBook] = useMutation(addBookMutation)

    const [title, getTitle] = useState();  
    const [genre, getGenre] = useState();  
    const [author, getAuthor] = useState();  

    const handleSubmit = e => {
        e.preventDefault();
        addNewBook({
            variables:{
                name: title, 
                genre: genre, 
                authorId: author
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }
    
    return(
        <div className="form_container">
            <form onSubmit={handleSubmit}>
                <h1>Dodaj książkę:</h1>
                <div>
                    <label>Tytuł książki:</label>
                    <input onChange={e => getTitle(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Gatunek:</label>
                    <input onChange={e => getGenre(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Autor:</label>
                    <select onChange={e => getAuthor(e.target.value)}>
                        <option>Wybierz autora:</option>
                        {loading ?
                            <option>Ładuję...</option>
                        :
                            authorsList.authors.map(e => 
                                <option key={e.id} value={e.id}>{e.name}</option>
                            )
                        }
                    </select>
                </div>
                <button>+</button>
            </form>
        </div>
    )
  }
  