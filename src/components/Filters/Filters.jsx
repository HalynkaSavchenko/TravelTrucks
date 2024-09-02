// import { useDispatch, useSelector } from 'react-redux';
// import {
//   toggleAC,
//   toggleBathroom,
//   toggleKitchen,
//   toggleTV,
// } from '../../redux/filterSlice'
// import { selectACFilter, selectBathroomFilter, selectKitchenFilter, selectTVFilter} from '../../redux/selectors';
import SvgIcon from '../../img/sprite';
import css from './Filters.module.css';
import Button from '../Button/Button';

export default function Filters() {
   return (
    <form action="" className={css.form}>
      
      <fieldset className={css.fieldset}>
        <legend>Vehicle equipment</legend>
        <label className={css.checkbox}>
          <input type="checkbox" name="equipment" value="ac" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-Wind" 
                />
              AC
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" name="equipment" value="automatic" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-diagram" 
                />
              Automatic
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" name="equipment" value="kitchen" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-cup-hot" 
                />
              Kitchen
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" name="equipment" value="TV" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-TV" 
                />
              TV
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" name="equipment" value="bathroom" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-drop" 
                />
              Bathroom
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" name="equipment" value="radio" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-Radio" 
                />
              Radio
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend>Vehicle type</legend>
        <label className= {css.radio}>
          <input type="radio" name="form" value="van" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-bi_grid-1x2" 
                />
              Van
        </label>
        <label className= {css.radio}>
          <input type="radio" name="form" value="fullyIntegrated" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-bi_grid" 
                />
              Fully Integrated
        </label>
        <label className= {css.radio}>
          <input type="radio" name="form" value="alcove" />
              <SvgIcon
                  className={css.icon}
                  iconName="icon-bi_grid-3x3-gap" 
                />
              Alkove
        </label>
      </fieldset>

      <Button text="Search"/>
    </form>
   )
}