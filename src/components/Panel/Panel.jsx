import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import css from './Panel.module.css'

export default function Panel () {
    return (
        <div>
           <Location/>
           <Filters/>
           <Button text = "Search"/>
        </div>
    )
}