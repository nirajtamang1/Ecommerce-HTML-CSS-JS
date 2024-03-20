import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (productId) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curPro) => curPro.id !== productId);
  localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

  // to remove the Div onclick
  let removeDiv = document.getElementById(`card${productId}`);
  if (removeDiv) {
    removeDiv.remove();
  }
  updateCartValue(cartProducts);
};
