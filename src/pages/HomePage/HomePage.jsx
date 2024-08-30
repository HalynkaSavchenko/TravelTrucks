import Hero from "../../components/Hero/Hero";
import css from './HomePage.module.css';

export default function HomePage () {
    return(
        <section className={css.homePage}>
            <Hero/>
        </section>
    )
}