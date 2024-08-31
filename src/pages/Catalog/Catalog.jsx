import Panel from '../../components/Panel/Panel';
import Loader from "../../components/Loader/Loader";
import CampersGallery from "../../components/CampersGallery/CampersGallery";
import css from './Catalog.module.css'

export default function Catalog () {
    return (
        <div className={css.catalog}>
            <Panel/>
            <CampersGallery/>
            <Loader/>
        </div>
    )
}