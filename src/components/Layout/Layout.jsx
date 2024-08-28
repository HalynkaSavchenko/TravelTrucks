import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';


export default function Layout({ children }) {
    return (
        <div className='css.container'>
          <Header>
            <Navigation/>
          </Header>
          <div>
            <Suspense fallback={<div><p>Please wait loading page...</p></div>}>
              {children}
            </Suspense>
          </div>
        </div>
    )
}