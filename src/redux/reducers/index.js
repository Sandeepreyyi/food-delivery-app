import { combineReducers } from "@reduxjs/toolkit";
import {foodReducer , selectedFoodReducer, cartFoodReducer,orderFoodReducer} from './foodReducer';
const reducers = combineReducers ({
    allFoods: foodReducer,
    food:selectedFoodReducer, 
    cartfood : cartFoodReducer,
    orderFood:orderFoodReducer,
    
});
export default reducers;