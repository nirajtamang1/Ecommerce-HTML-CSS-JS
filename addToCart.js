import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
export const addToCart = (event, id, stock) => {
  let arrLocalStrorageProduct = getCartProductFromLS();
  const currentProductElement = document.querySelector(`#card${id}`);
  //   console.log(currentProductElement);
  let quantity =
    currentProductElement.querySelector(".productQuantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;
  price = price.replace("Rs. ", "");
  let existingProduct = arrLocalStrorageProduct.find(
    (currentProduct) => currentProduct.id === id
  );
  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStrorageProduct.map((currentProduct) => {
      return currentProduct.id === id ? updatedCart : currentProduct;
    });
    console.log(updatedCart);
    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    return;
  }
  if (existingProduct) {
    alert("This product is already in the cart!");
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);
  let updateCart = { id, quantity, price };
  arrLocalStrorageProduct.push(updateCart);
  localStorage.setItem(
    "cartProductsLS",
    JSON.stringify(arrLocalStrorageProduct)
  );
  updateCartValue(arrLocalStrorageProduct);
};
