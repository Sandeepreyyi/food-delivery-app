import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import AllFood from './AllFood';
import {setFood} from '../redux/actions/FoodActions'
const FoodListing = () => {
  // const food = useSelector((state) => state.allFoods.foods);
  const dispatch = useDispatch();

  const fetchFoods = async () => {
    const responce = await axios
    .get('https://yummy-food-xup0.onrender.com/api/foodItems')
    .catch((err)=>{
         console.log(err);
    })
    dispatch(setFood(responce))
  
  };
  useEffect(() => {
    fetchFoods();
  },[]);
  return (
    <div>
      <AllFood />
    </div>
  );
};

export default FoodListing;
