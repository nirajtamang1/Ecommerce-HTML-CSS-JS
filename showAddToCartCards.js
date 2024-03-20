import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { removeProdFromCart } from "./removeProdFromCart";

let cartProduct = getCartProductFromLS();

let filterProducts = products.filter((curProduct) => {
  return cartProduct.some((curElem) => curElem.id === curProduct.id);
});
// console.log(filterProducts);

// To updated the addToCart Page
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    console.log(curProd);
    const { category, id, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);
    const lSActualData = fetchQuantityFromCartLS(id, price);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));
    productClone.querySelector(".productName").textContent = name;
    cartElement.append(productClone);
  });
};
showCartProduct();
