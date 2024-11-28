// structure for  global state 
import { createContext, useState, useContext } from "react";
const GlobalContext = createContext()
export default GlobalContext


const [movies, setMovies] = useState([])
const [query, setQuery] = useState('')


const searchMovies = (query) => {
    const apiKey = '5a543219867f24acc0f8f1177f20889d';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`)
        .then(response => response.json())
        .then(data => searchMovies(data.results))
        .catch(error => console.log(error));




}







