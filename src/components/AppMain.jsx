//components for appmain
import { useGlobalContext } from "../context/GlobalContext"
export default function AppMain() {
    const { movies } = useGlobalContext()
    console.log(movies);

    return (

        <main>

            <p></p>
        </main>



    )
}