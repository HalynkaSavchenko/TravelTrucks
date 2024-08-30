import Panel from '../../components/Panel/Panel';
import LoadMoreBtn from '../../components/Button/Button';
import Loader from "../../components/Loader/Loader";
import CampersGallery from "../../components/CampersGallery/CampersGallery";

export default function Catalog () {
    return (
        <div>
            <Panel/>
            <CampersGallery/>
            <LoadMoreBtn/>
            <Loader/>
        </div>
    )
}