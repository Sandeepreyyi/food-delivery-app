import { ActionTypes } from "../contants/Food_types";
import { toast } from "react-toastify";
import '../../pages/food.css';
const initialState = {
  foods: [],
};
const initialFoodState = {
  food : {},
}

const initialCartState = {
  cartfood: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],

  cartTotalQuantity: localStorage.getItem('ItemsCount')? JSON.parse(localStorage.getItem('ItemsCount')):0,
  cartTotalAmount:localStorage.getItem('ItemsCost')? JSON.parse(localStorage.getItem('ItemsCost')):0,
};

const initialOrderState = {
  orderfood: [],
  orderTotalQuantity: 0,
  orderTotalAmount: 0,
};

export const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FOOD:
      return { ...state, foods: payload };
    default:
      return state;
  }
};

export const selectedFoodReducer = (state = initialFoodState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_FOOD:
      return { ...state, ...payload };
    default:
      return state;
  }
};


export const cartFoodReducer = (state = initialCartState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CART_FOOD:
      const existingItemIndex = state.cartfood.findIndex(
        (item) => item.id === payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = state.cartfood.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        toast.info(`${payload.itemName} added to cart`, {
          position: "bottom-left",
        });

        // Update local storage with the new cartfood, cartTotalQuantity, and cartTotalAmount
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        localStorage.setItem("ItemsCount", state.cartTotalQuantity + 1);
        localStorage.setItem("ItemsCost", state.cartTotalAmount + payload.price);

        return {
          ...state,
          cartfood: updatedCart,
          cartTotalQuantity: state.cartTotalQuantity + 1,
          cartTotalAmount: state.cartTotalAmount + payload.price,
        };
      } else {
        const newItem = { ...payload, quantity: 1 };

        toast.success(`${payload.itemName} is added`, {
          position: "bottom-left",
        });

        const newCartfood = [...state.cartfood, newItem];

        // Update local storage with the new cartfood, cartTotalQuantity, and cartTotalAmount
        localStorage.setItem("cartItems", JSON.stringify(newCartfood));
        localStorage.setItem("ItemsCount", state.cartTotalQuantity + 1);
        localStorage.setItem("ItemsCost", state.cartTotalAmount + payload.price);

        return {
          ...state,
          cartfood: newCartfood,
          cartTotalQuantity: state.cartTotalQuantity + 1,
          cartTotalAmount: state.cartTotalAmount + payload.price,
        };
      }

    case ActionTypes.REMOVE_CART_FOOD:
      const removedItem = state.cartfood.find((item) => item.id === payload.id);

      if (removedItem) {
        const updatedCart = state.cartfood.filter(
          (item) => item.id !== payload.id
        );

        toast.warning(`${payload.itemName} removed `, {
          position: "bottom-left",
        });

        // Update local storage with the new cartfood, cartTotalQuantity, and cartTotalAmount
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        localStorage.setItem("ItemsCount", state.cartTotalQuantity - removedItem.quantity);
        localStorage.setItem("ItemsCost", state.cartTotalAmount - removedItem.price * removedItem.quantity);

        return {
          ...state,
          cartfood: updatedCart,
          cartTotalQuantity: state.cartTotalQuantity - removedItem.quantity,
          cartTotalAmount: state.cartTotalAmount - removedItem.price * removedItem.quantity,
        };
      }

    case ActionTypes.DECREASE_CART_FOOD:
      const decreasedItemIndex = state.cartfood.findIndex(
        (item) => item.id === payload.id
      );

      if (decreasedItemIndex !== -1) {
        const updatedCart = state.cartfood
          .map((item, index) =>
            index === decreasedItemIndex && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

        const decreasedItem = state.cartfood[decreasedItemIndex];

        toast.info(`${payload.itemName} quantity decreased`, {
          position: "bottom-left",
        });

        // Update local storage with the new cartfood, cartTotalQuantity, and cartTotalAmount
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        localStorage.setItem("ItemsCount", state.cartTotalQuantity - 1);
        localStorage.setItem("ItemsCost", state.cartTotalAmount - decreasedItem.price);

        return {
          ...state,
          cartfood: updatedCart,
          cartTotalQuantity: state.cartTotalQuantity - 1,
          cartTotalAmount: state.cartTotalAmount - decreasedItem.price,
        };
      }

    case ActionTypes.REMOVE_ALL_CART_FOOD:
      // Update local storage with the new cartfood, cartTotalQuantity, and cartTotalAmount
      localStorage.setItem("cartItems", "[]");
      localStorage.setItem("ItemsCount", 0);
      localStorage.setItem("ItemsCost", 0);

      return {
        cartfood: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      };

    default:
      return state;
  }
};


export const orderFoodReducer = (state = initialOrderState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ORDER_FOOD:
      const existingItemIndex = state.orderfood.findIndex(
        (item) => item.id === payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = state.orderfood.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        toast.info(`${payload.itemName} increased to orders`, {
          position: "bottom-left",
        });

        return {
          ...state,
          orderfood: updatedCart,
          orderTotalQuantity: state.orderTotalQuantity + 1,
          orderTotalAmount: state.orderTotalAmount + payload.price,
        };
      } else {
        const newItem = { ...payload, quantity: 1 };

        toast.success(`${payload.itemName} is added to order`, {
          position: "bottom-left",
        });

        const newCartfood = [...state.orderfood, newItem];

        return {
          ...state,
          orderfood: newCartfood,
          orderTotalQuantity: state.orderTotalQuantity + 1,
          orderTotalAmount: state.orderTotalAmount + payload.price,
        };
      }

    case ActionTypes.REMOVE_ORDER_FOOD:
      const removedItemIndex = state.orderfood.findIndex(
        (item) => item.id === payload.id
      );

      if (removedItemIndex !== -1) {
        const updatedCart = state.orderfood.filter(
          (item, index) => index !== removedItemIndex
        );

        const removedItem = state.orderfood[removedItemIndex];

        toast.warning(`${payload.itemName} removed from order`, {
          position: "bottom-left",
        });

        return {
          ...state,
          orderfood: updatedCart,
          orderTotalQuantity: state.orderTotalQuantity - removedItem.quantity,
          orderTotalAmount:
            state.orderTotalAmount - removedItem.price * removedItem.quantity,
        };
      }

    case ActionTypes.DECREASE_ORDER_FOOD:
      const decreasedItemIndex = state.orderfood.findIndex(
        (item) => item.id === payload.id
      );

      if (decreasedItemIndex !== -1) {
        const updatedCart = state.orderfood.map((item, index) =>
          index === decreasedItemIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        const decreasedItem = state.orderfood[decreasedItemIndex];

        toast.info(`${payload.itemName} quantity decreased`, {
          position: "bottom-left",
        });

        // Filter out items with quantity > 0
        const filteredCart = updatedCart.filter((item) => item.quantity > 0);

        return {
          ...state,
          orderfood: filteredCart,
          orderTotalQuantity: state.orderTotalQuantity - 1,
          orderTotalAmount: state.orderTotalAmount - decreasedItem.price,
        };
      }

    case ActionTypes.REMOVE_ALL_ORDERS:
      return {
        ...state,
        orderfood: [],
        orderTotalQuantity: 0,
        orderTotalAmount: 0,
      };
      case ActionTypes.ORDER_CONFORM:
        toast.success(`Ordered Successfully, Thanks for Order`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000, // Adjust the duration as needed
          className: 'custom-toast', // Add a custom class for styling
        });
        
      return {
        ...state,
        orderfood: [],
        orderTotalQuantity: 0,
        orderTotalAmount: 0,
      };

    default:
      return state;
  }
};