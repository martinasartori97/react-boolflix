//components for searchbar
import { useGlobalContext } from "../context/GlobalContext"

export default function searchbar() {
    const { setSearchText } = useGlobalContext()

    return (
        <input id="searchbar" type="searchbar" onChange={(e) => setSearchText(e.target.value)} />
    )
}