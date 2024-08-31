
import css from './CampersItem.module.css';

export default function CampersItem ({ camper }) {
  return (
    <div className={css.catalogItem}>
      <img src={camper.gallery[0]?.thumb} alt={camper.name} className={css.image} />
      <h2 className={css.name}>{camper.name}</h2>
      <p className={css.price}>Price: {camper.price},00</p>
      <p className={css.rating}>Rating: {camper.rating}</p>
      <p className={css.location}>Location: {camper.location}</p>
      <p className={css.description}>{camper.description}</p>
    </div>
  );
};




