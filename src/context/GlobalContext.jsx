// structure for  global state 
import { createContext, useContext, useEffect, useState } from 'react';
export const GlobalContext = createContext()

function GlobalContextProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [searchText, setSearchText] = useState('')
    console.log(searchText);

    // const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY

    const api_key = '409853ba2db4ff2d805e6dab08e2958a';
    const base_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`

    function HandleSearchTextSubmit(e) {
        e.preventDefault();
        console.log(base_api_url);


        fetch(base_api_url)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);

                setMovies(results);
            });
    }

    const values = {
        movies,
        setMovies,
        searchText,
        setSearchText,
        base_api_url,
        HandleSearchTextSubmit
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )

}
function useGlobalContext() {
    return useContext(GlobalContext);
}




export { GlobalContextProvider, useGlobalContext }





