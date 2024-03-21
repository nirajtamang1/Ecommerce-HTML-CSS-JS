import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");
  let localCardProduct = getCartProductFromLS();
  let initialValue = 0;
  let totalPrice = localCardProduct.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);
  productSubTotal.textContent = `Rs. ${totalPrice}`;
  // Adding VAT and Shipping cost to product
  productFinalTotal.textContent = `Rs. ${totalPrice + 50}`;
};
