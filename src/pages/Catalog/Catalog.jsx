import Panel from '../../components/Panel/Panel';
import Header from '../../components/Header/Header';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from "../../components/Loader/Loader";
import CampersGallery from "../../components/CampersGallery/CampersGallery";

export default function Catalog () {
    return (
        <div>
            <Header/>
            <Panel/>
            <CampersGallery/>
            <LoadMoreBtn/>
            <Loader/>
        </div>
    )
}