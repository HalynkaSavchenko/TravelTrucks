// import Filters from "../Filters/Filters";
// import Location from "../Location/Location";
import {useRef} from 'react'
import SearchBtn from "../Button/Button";
import css from './Panel.module.css'

export default function Panel () {
    const formRef = useRef(null);
    return (
        <div>
           <form className={css.form} ref={formRef} >
                 <input className={css.input} type='text' autoComplete='off' autoFocus name='search' placeholder='Пошук фільмів'/>
                 <SearchBtn>Search</SearchBtn>
             </form>
        </div>
    )
}