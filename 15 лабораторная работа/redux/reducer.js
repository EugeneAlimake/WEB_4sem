import { ADD_TO_CART, DELETE_FROM_CART, DELIVERY_METHOD, PAYMENT_METHOD, ADDRESS, SIGN_UP, SIGNED_IN } from "./types.js";

const initialState = {
  goods: [],
  deliveryMethod: "",
  paymentMethod: "",
  login: "",
  password: "",
  signedIn: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, goods: [...state.goods, action.payload] };
    case DELETE_FROM_CART:
      for (let i = 0; i < state.goods.length; i++) {
        if (action.payload === state.goods[i])
          return {
            ...state,
            goods: [...state.goods.slice(0, i), ...state.goods.slice(i + 1)],
          };
      }
    case DELIVERY_METHOD:
      return {...state, deliveryMethod: action.payload}
    case PAYMENT_METHOD:  
      return {...state, paymentMethod: action.payload}
      case ADDRESS:
        return {...state, address: action.payload}
    case SIGN_UP:
          return {...state, login: action.login, password: action.password}
    case SIGNED_IN:
      return {...state, signedIn: action.in}
    default:
      return state;
  }
};
