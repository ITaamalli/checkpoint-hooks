import React, { useState } from 'react';
import MovieCard from './MovieCard';
    const MovieList = () => {
    const [movies, setmovies] = useState ([
        {
            title: "movie1",
            description: "desc1",
            posterUrl: "Url1",
            rating:1,
           
        },
        {
            title: "movie2",
            description: "desc2",
            posterUrl: "Url2",
            rating:2,
           
        },
        {
            title: "movie3",
            description: "desc3",
            posterUrl: "Url3",
            rating:3,
           
        },
    ]);
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");
    const [posterUrl,setposterUrel] = useState("");
    const [rating,setrating] = useState("");

    const [filtragetitle, setfiltragetitle] = useState("");
    const [filtragerating, setfiltragerating] = useState ("");
    
    const handleSubmit = (e) => {
      e.preventDefault ();
   
        let newmovie = {
            title: title,
            description: description,
            posterUrl: posterUrl,
            rating: rating,
            
         };
        let newlist = [...movies , newmovie];
        setmovies(newlist);
    };
    const filtrage = (e) => {
        e.preventDefault ();
        let newlist = movies.filter((el) => el.title.includes(filtragetitle));
        setmovies (newlist);
    };
        
  return (
  <div>
     { movies.map ((el, index) => (
        <MovieCard key ={index} el={el} />))}
     <form onSubmit={handleSubmit} >
  
        <div>
            <label htmlFor="">title</label>
            <input type="text" onChange={(e) => settitle (e.target.value) } />
        </div>
        <div>
            <label htmlFor="">description</label>
            <input type="text" onChange={(e) => setdescription (e.target.value) }/>
        </div>
        <div>
            <label htmlFor="">posterUrl</label>
            <input type="text" onChange={(e) => setposterUrel (e.target.value) }/>
        </div>
        <div>
            <label htmlFor="">rating</label>
            <input type="number" onChange={(e) => setrating (e.target.value) }/>
        </div>
        <div>
            <input type="submit" />
        </div>
      </form>
      <form onSubmit={filtrage}>
        <div>
            <label>filter</label>
            <input type="text" onChange={(e) => setfiltragetitle (e.target.value) } />
            <input type="number" onChange={(e) => setfiltragerating (e.target.value) }/>    
        </div>
        <input type="submit" />
      </form>
 </div>)
 
}

export default MovieList