import css from './Hero.module.css';
import regularImage from '../../img/Picture.png';
import retinaImage from '../../img/Picture@2x.png'
import { NavLink } from 'react-router-dom';

export default function Hero () {
    const isRetina = window.matchMedia("(min-resolution: 192dpi)").matches;

    const backgroundImage = isRetina ? retinaImage : regularImage;
    return (
        <div
            className={css.background}
            style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Campers of your dreams</h1>
                <p>You can find everything you want in our catalog</p>
                <NavLink to='catalog'>View Now</NavLink>
        </div>
    )
};