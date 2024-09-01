import Description from "../../components/Description/Description";
import Features from "../../components/Features/Features";
import Form from "../../components/Form/Form";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import Reviews from "../../components/Reviews/Reviews";
import Title from '../../components/Title/Title';

export default function Camper () {
    return (
        <div>
            <Title/>
            <PhotoGallery/>
            <Description/>
            <Features/>
            <Reviews/>
            <Form/>
        </div>
    )
};
