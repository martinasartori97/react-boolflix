// structure for  global state 
import { createContext, useContext, useEffect, useState } from 'react';
export const GlobalContext = createContext()

function GlobalContextProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [searchText, setSearchText] = useState('')

    const base_api_url = 'https://api.themoviedb.org/3/search/movie?api_Key=${api_key}&query=${SearchText}'
    const api_key = '5a543219867f24acc0f8f1177f20889d';

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_Key=${api_key}')
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setMovies(results);
            });
    }, [])

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





