// import { product } from "./data.js";

// const productBox = document.querySelector(".products_box");
// const cartBox = document.querySelector(".cart_box");

// let cart = [];

// const renderProduct = (props) => {
//   if (props == "product") {
//     return (productBox.innerHTML = product
//       .map(
//         (item) => `
//           <div class="product">
//               <div class="img_block">
//                   <img class="product_img" width="200" src="${item.img}" alt="">
//                </div>
//                    <h2 class="product_title">${item.name}</h2>
//                    <h3 class="product_price">$ ${item.price}</h3>
//                   <button data-product ="${item.id}">add</button>
//           </div> 
//           `
//       )
//       .join());
//   }
//   cartBox.innerHTML = cart.map((item) => 
//     `    <div class="product">
//         <div class="img_block">
//             <img class="product_img" width="200" src="${item.img}" alt="">
//          </div>
//              <h2 class="product_title">${item.name}</h2>
//              <h3 class="userPrice">$ ${item.price}</h3>
//              <button >-</button>
//              <span>${item.count}</span>
//              <button >+</button>
//     </div> `
//   );
// };
// renderProduct("product");

// productBox.addEventListener("click", (e) => {
//   const { dataset } = e.target;
//   const prdoduct = cart.find((p) => p.id == dataset.product )
//   if (!prdoduct){
//       for (let i of product) {
//         if (i.id == dataset.product) {
//           cart.push({ ...i, count: 1, userPrice: i.price });
//         }
//       }

//     }
//     renderProduct("cart");
// });




export const product =[
  {
      id: 1,
      img:"./img/product1.jpg",
      name:"product1",
      price:10,


  },

  {
      id: 2,
      img:"./img/product2.jpg",
      name:"product2",
      price:20,


  },

  {
      id: 3,
      img:"./img/product3.jpg",
      name:"product3",
      price:30,


  }
]

let totalProduct = product.reduce((totalProduct2, product2) => {
  // return totalProduct2 = totalProduct2 +  product2.price
  // return totalProduct2 = totalProduct2 + " || " + product2.price
}," ")
console.log(totalProduct);