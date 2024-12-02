//components for appmain
import ReactCountryFlag from 'react-country-flag';
import { useGlobalContext } from "../context/GlobalContext"
// import searchbar from './SearchBar';
// import button from './Button';





export default function AppMain() {
    const { movies } = useGlobalContext()



    function languageCountryCode(movie) {
        return (<ReactCountryFlag countryCode={movie.original_language} svg />)

    }





    return (

        <main>
            {/* <searchbar />
            <button /> */}

            {movies?.map((movie, index) => (
                <div key={index}>
                    <p>titolo:{movie.title}</p>
                    <p>titolo originale:{movie.original_title}</p>
                    <p>language:{movie.original_language}</p>
                    <p>vote_average:{movie.vote_average}</p>
                </div>





            ))}





        </main>


    )
}





