import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import css from './HomePage.module.css';

export default function HomePage () {
    return(
        <section className={css.homePage}>
            <Header/>
            <Hero/>
        </section>
    )
}