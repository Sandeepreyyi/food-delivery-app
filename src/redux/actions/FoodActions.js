import { ActionTypes } from "../contants/Food_types"
export const setFood = (foods) => {
    return{
        type : ActionTypes.SET_FOOD,
        payload : foods,
    };

};

export const selectedFood = (food) => {
    return{
        type : ActionTypes.SELECTED_FOOD,
        payload : food,
    };

};

export const cartFood = (cartfood) =>
{
    return {
        type : ActionTypes.CART_FOOD,
        payload: cartfood,
    }
}

export const removeCartFood = (cartfood)=>
{
    return{
        type : ActionTypes.REMOVE_CART_FOOD,
        payload: cartfood,
    }

    
} 

export const decreaseCartFood = (cartfood)=>
{
    return{
        type : ActionTypes.DECREASE_CART_FOOD,
        payload: cartfood,
    }  
}
export const removeAllCartFood = (cartfood)=>
{
    return{
        type : ActionTypes.REMOVE_ALL_CART_FOOD,
        payload: cartfood,
    }

    
} 

export const orderFood  = (orderfood) =>
{
    return {
        type : ActionTypes.ORDER_FOOD,
        payload: orderfood,
    }
}
export const removeorderFood  = (orderfood) =>
{
    return {
        type : ActionTypes.REMOVE_ORDER_FOOD,
        payload: orderfood,
    }
}


export const decreaseOrderFood = (orderfood)=>
{
    return{
        type : ActionTypes.DECREASE_ORDER_FOOD,
        payload: orderfood,
    }  
}

export const removeAllOrderFood = (orderfood)=>
{
    return{
        type : ActionTypes.REMOVE_ALL_ORDERS,
        payload: orderfood,
    }  
}
export const orderConform =  (orderfood) =>
{
    return {
        type : ActionTypes.ORDER_CONFORM,
        payload:orderfood,
    }
}
