import css from './Hero.module.css';
import regularImage from '../../img/Picture.png';
import retinaImage from '../../img/Picture@2x.png'
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

export default function Hero () {
    const isRetina = window.matchMedia("(min-resolution: 192dpi)").matches;

    const backgroundImage = isRetina ? retinaImage : regularImage;
    return (
        <div
            className={css.background}
            style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className={css.title}>Campers of your dreams</h1>
                <p className={css.text}>You can find everything you want in our catalog</p>
                <NavLink className={css.link} to='catalog'>
                    <Button text="View Now"/>
                </NavLink>
        </div>
    )
};