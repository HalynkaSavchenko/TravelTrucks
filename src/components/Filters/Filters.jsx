import { useDispatch, useSelector } from 'react-redux';
import {
  toggleAC,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
} from '../../redux/filterSlice'
import { selectACFilter, selectBathroomFilter, selectKitchenFilter, selectTVFilter} from '../../redux/selectors';
import SvgIcon from '../../img/sprite';
import css from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();

  const isACSelected = useSelector(selectACFilter);
  const isBathroomSelected = useSelector(selectBathroomFilter);
  const isKitchenSelected = useSelector(selectKitchenFilter);
  const isTVSelected = useSelector(selectTVFilter);
 

  const handleToggleAC = () => dispatch(toggleAC());
  const handleToggleBathroom = () => dispatch(toggleBathroom());
  const handleToggleKitchen = () => dispatch(toggleKitchen());
  const handleToggleTV = () => dispatch(toggleTV());
 

  return (
    <div>
      <p>Filters</p>
      <p>Vehicle equipment</p>
      <button
        className={isACSelected ? css.selected : ''}
        onClick={handleToggleAC}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-Wind"
          width="16"
          height="16"
        />
        <p>AC</p>
      </button>
      {/* <button
        className={isAutomaticSelected ? css.selected : ''}
        onClick={handleToggleAutomatic}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-diagram"
          width="16"
          height="16"
        />
        <p>Automatic</p>
      </button> */}
      <button
        className={isKitchenSelected ? css.selected : ''}
        onClick={handleToggleKitchen}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-cup-hot"
          width="16"
          height="16"
        />
        <p>Kitchen</p>
      </button>
      <button
        className={isTVSelected ? css.selected : ''}
        onClick={handleToggleTV}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-TV"
          width="16"
          height="16"
        />
        <p>TV</p>
      </button>
      <button
        className={isBathroomSelected ? css.selected : ''}
        onClick={handleToggleBathroom}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-drop"
          width="16"
          height="16"
        />
        <p>Bathroom</p>
      </button>
      <p>Vehicle type</p>
      {/* <button
        className={isVanSelected ? css.selected : ''}
        onClick={handleToggleVan}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-bi_grid-1x2"
          width="16"
          height="16"
        />
        <p>Van</p>
      </button>
      <button
        className={isFullyIntegratedSelected ? css.selected : ''}
        onClick={handleToggleFullyIntegrated}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-bi_grid"
          width="16"
          height="16"
        />
        <p>Fully Integrated</p>
      </button>
      <button
        className={isAlcoveSelected ? css.selected : ''}
        onClick={handleToggleAlcove}
      >
        <SvgIcon
          className={css.icon}
          iconName="icon-bi_grid-3x3-gap"
          width="16"
          height="16"
        />
        <p>Alcove</p>
      </button> */}
    </div>
  );
}
