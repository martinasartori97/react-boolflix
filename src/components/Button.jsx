//components for button
import { useGlobalContext } from "../context/GlobalContext"
export default function button() {
    const { HandleSearchTextSubmit } = useGlobalContext()

    return (
        <button onClick={(e) => HandleSearchTextSubmit(e)}>cerca</button>




    )
}