import Filters from "../Filters/Filters";
import Location from "../Location/Location";
import SearchBtn from "../SearchBtn/SearchBtn";

export default function Panel () {
    return (
        <div>
            <Location/>
            <Filters/>
            <SearchBtn/>
        </div>
    )
}