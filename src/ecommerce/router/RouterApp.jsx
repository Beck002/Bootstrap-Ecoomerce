import { Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { CartPage, HombrePage, HomePage, KidsPage, MujerPage, SearchPage} from '../pages';


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
          <Route path="cart"   element={<CartPage /> }/>

          <Route path="product/:id" element={<ItemDetailContainer /> }/>

          <Route path="/" element={ <HomePage /> }/>

          <Route path="/*" element={ <Navigate to="/" /> }/>


        </Routes>
    
    
    </>
  )
}
