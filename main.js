import { product } from "./data.js";

const productBox = document.querySelector(".products_box");
const cartBox = document.querySelector(".cart_box");





const renderProduct = () => {
  productBox.innerHTML = product.map(
    (item) => `
    <div class="product">
        <div class="img_block">
            <img class="product_img" width="200" src="./img/product1.jpg" alt="">
         </div>
             <h2 class="product_title">title</h2>
             <h3 class="product_price">$</h3>
            <button class="btn_add">add</button>
    </div> 
    `
  ).join()
};
renderProduct();


