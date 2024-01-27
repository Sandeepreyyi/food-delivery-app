import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import AllFood from '../pages/AllFood'
import Cart from '../pages/Cart'
import FoodDetails from '../pages/FoodDetails'
import Signin from '../pages/Signin'
import Register from '../pages/Register'
import FoodListing from '../pages/FoodListing'
import VegetarianItems from '../pages/VegetarianItems'
import NonVegitarianItems from '../pages/NonVegitarianItems'

import FoodDeserts from '../pages/FoodDeserts'
import Orders from '../pages/Orders'
const Routers = () => {
  return (
   <Routes>
    {/* <Route path="/" element={<Navigate to="/home"/>} /> */}
    <Route path="/" element={<Home/>} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/allfood' element={<AllFood/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/foodies/:id' element={<FoodDetails/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/resgister' element={<Register />}/>
    <Route path='/foodlisting' element={<FoodListing />}/>
    <Route path='/foodlisting/vegetarianItems' element={<VegetarianItems />}/>
    <Route path='/foodlisting/nonvegetarianItems' element={<NonVegitarianItems/>}/>
    {/* <Route path='/foodlisting/deserts' element={<Desearts/>}/> */}
        <Route path='/foodlisting/deserts' element={<FoodDeserts/>}/>
    <Route path='/orders' element={<Orders/>}/>



    
   </Routes>
  )
}

export default Routers