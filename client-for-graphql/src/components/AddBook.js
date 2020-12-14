import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from "../queries/queries";




function AddBook() {

    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

   const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    //console.log(data.authors);

   const displayAuthors = ()=>{
        
       
            return data.authors.map(author => {
                return( <option key={author.id} value={author.id}>{ author.name }</option> );
            });
        
    }
   const submitForm = (e)=> {
        e.preventDefault();
        console.log("bookName= ", bookName);
        console.log("genre= ", genre);
        console.log("authorId= ", authorId);
    }
    return (
        <div>

        <ul>
                   <form id="add-book" onSubmit={submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange = {(e) =>{
                        setBookName(e.target.value)
                    }} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text"  onChange = {(e) =>{
                        setGenre(e.target.value)
                    }} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select  onChange = {(e) =>{
                        setAuthorId(e.target.value)
                    }}>
                        <option>Select author</option>
                        { displayAuthors() }
                    </select>
                </div>
                <button>+</button>

            </form>

                </ul>
       
       
            
        </div>
    )
}

export default AddBook
