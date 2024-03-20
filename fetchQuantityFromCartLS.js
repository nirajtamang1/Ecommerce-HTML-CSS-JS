import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, price) =>{
    let cartProduct = getCartProductFromLS();
    let existingProduct = cartProduct.find((curPro) => curPro.id == id);
    let quantity = 1
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return  {quantity , price};
}