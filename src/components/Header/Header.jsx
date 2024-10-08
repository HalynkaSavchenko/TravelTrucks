import { Link } from 'react-router-dom';
import css from './Header.module.css'
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return (
        <div className={css.header}>
            <Link className={css.logo} to="/">TravelTrucs</Link>
            <Navigation/>
        </div>
    )
}