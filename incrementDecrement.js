import { getCartProductFromLS } from "./getCartProductFromLS";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = document.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCardProduct = getCartProductFromLS();

  let existingProd = localCardProduct.find((curProd) => curProd.id === id);

  if (existingProd) {
    //Increment the quantity of an already
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;
  let updatedCart = { id, quantity, price: localStoragePrice };
  updatedCart = localCardProduct.map((currentProduct) => {
    return currentProduct.id === id ? updatedCart : currentProduct;
  });
  console.log(updatedCart);
  localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
};
