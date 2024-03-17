const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((curPro) => {
    const { brand, category, description, id, image, name, price, stock } =
      curPro;
    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `Rs. ${price}`;
    productClone.querySelector(".productActualPrice").textContent = `Rs. ${
      price * 3
    }`;

    productContainer.append(productClone);
  });
};
