import { Navigate, Route, Routes } from 'react-router-dom';
import { HombrePage, HomePage, KidsPage, MujerPage, ProductPage, SearchPage} from '../pages';


import { NavBar } from "./ui/NavBar"

export const RouterApp = () => {
  return (
    <>
        <NavBar/>
    
        <Routes>

            <Route path="hombre"   element={<HombrePage /> }/>
            <Route path="mujer"    element={<MujerPage/> }/>
            <Route path="kids"     element={<KidsPage/> }/>
            <Route path="search"   element={<SearchPage /> }/>

            <Route path="product/:id" element={<ProductPage/> }/>

            <Route path="/" element={ <HomePage /> }/>

            <Route path="/*" element={ <Navigate to="/" /> }/>


        </Routes>
    
    
    </>
  )
}
