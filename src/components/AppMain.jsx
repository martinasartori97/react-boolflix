//components for appmain
import ReactCountryFlag from 'react-country-flag';
import { useGlobalContext } from "../context/GlobalContext"

export default function AppMain() {
    const { movies } = useGlobalContext()


    return (

        <main>
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