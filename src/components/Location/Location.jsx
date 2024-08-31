import { useRef } from 'react';
import SvgIcon from '../../img/sprite'; 
import css from './Location.module.css';

export default function Location() {
  const formRef = useRef(null);

  return (
    <div className={css.container}>
      <form className={css.form} ref={formRef}>
        <label htmlFor="search" className={css.label}>
          Location
          <div className={css.inputWrapper}>
            <SvgIcon
              className={css.icon}
              iconName="map" 
              width="16" 
              height="16"
            />
            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              name="search"
              placeholder="Kyiv, Ukraine"
            />
          </div>
        </label>
      </form>
    </div>
  );
}
