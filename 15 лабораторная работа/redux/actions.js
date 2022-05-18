import { ADD_TO_CART, DELETE_FROM_CART, DELIVERY_METHOD, PAYMENT_METHOD, ADDRESS, SIGN_UP, SIGNED_IN } from "./types.js";

export function addToCart(good) {
  return {
    type: ADD_TO_CART,
    payload: good,
  };
}
export function deleteFromCart(good) {
  return {
    type: DELETE_FROM_CART,
    payload: good,
  }
}
export function deliveryMethod(method) {
  return {
    type: DELIVERY_METHOD,
    payload: method,
  }
}
export function paymentMethod(method) {
  return {
    type: PAYMENT_METHOD,
    payload: method,
  }
}
export function address(address) {
  return {
    type: ADDRESS,
    payload: address
  }
}
export function signUp(login, password) {
  return {
    type: SIGN_UP,
    login: login,
    password: password,
  };
}
export function signedIN(state) {
  return {
    type: SIGNED_IN,
    in: state,
  }
}