import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Camper = lazy(() => import('../../pages/Camper/Camper'));
const Layout = lazy(() => import('../Layout/Layout'));
const Features = lazy(() => import('../Features/Features'));
const Reviews = lazy(() => ('../Reviews/Reviews.jsx'));
const NotFoundPage = lazy(() => ('../../pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {
    return (
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/catalog/:id' element={<Camper/>}>
              <Route path='features' element={<Features/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </Layout>
    )
}