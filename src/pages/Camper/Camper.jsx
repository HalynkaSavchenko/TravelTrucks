import { Suspense } from 'react';
import { useParams, NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import Description from "../../components/Description/Description";
import Features from "../../components/Features/Features";
import Form from "../../components/Form/Form";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import Reviews from "../../components/Reviews/Reviews";
import Title from '../../components/Title/Title';
import clsx from 'clsx';
import css from './Camper.module.css'

export default function Camper () {
    const navLinkClass =({isActive}) => {
        return clsx(css.link, isActive && css.active)
    }
    return (
        <div>
            <Title/>
            <PhotoGallery/>
            <Description/>
            <Features/>
            <Reviews/>
            <Form/>
            <ul className={css.nav}>
            <li>
                <NavLink to='cast' className={navLinkClass}>Features</NavLink>
            </li>
            <li>
                <NavLink to='reviews' className={navLinkClass}>Reviews</NavLink>
            </li>
          </ul>
          <Suspense fallback={<div><p>Please wait loading page...</p></div>}>
             <Outlet/>
          </Suspense>
        </div>
    )
};
