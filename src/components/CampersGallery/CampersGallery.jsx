import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations';
import { selectCampers, selectIsLoading, selectIsError } from '../../redux/selectors';
import CampersItem from '../CampersItem/CampersItem';
import css from './CampersGallery.module.css'
import Button from '../Button/Button'



export default function CampersGallery () {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    console.log(campers)

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>There was an error loading the campers.</p>;
    return (
        <div>
            <ul className={css.catalog}>
          {campers.map((camper) => (
            <li key={camper.id}>
                <CampersItem key={camper.id} camper={camper} />
            </li>
          ))}
        </ul>
         <Button text = "Load more"/>
        </div>
      );
};