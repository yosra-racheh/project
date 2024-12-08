
let productdom=document.querySelector(".galeri1")
let cartprod=document.querySelector(".carts-products")
let cartProdDivDom=document.querySelector(".carts-products div")
let badget=document.querySelector(".badge")
let shoppingcartitem=document.querySelector(".shoppingcart")
let products=[


    {
        id:1,
        titre :'paco rabanne pure xs',
        prix : '400 dinars',
        imageurl:'/D1-1 (1).png',
    },

    {
    id:2,
    titre :'bvlgari goldea',
    prix : '300 dinars',
    imageurl:'/D12-1.png',
   },
   {
    id:3,
    titre :'nina ricci',
    prix : '250 dinars',
    imageurl:'/D7-1.png',
   },
 
] 
shoppingcartitem.addEventListener('click',openCartMenu);

function afficheListe(){
   let productsul= products.map((item) =>{
    return `  <div class="produit">
              <img src="${item.imageurl}" alt="" >
             
            <div class="bouton">
             <p>${item.titre}</p>
             <p>${item.prix}</p>
             <button class="add-to-cart"onclick="addedToCart(${item.id})"> add to cart</button>
             <i class=" favoret fa-regular fa-heart"></i>
            
            </div>
            
            </div>
            




    `
   })
    
productdom.innerHTML= productsul;
   
}
afficheListe();

function addedToCart(id) {
    let chooseitem=products.find((item)=>item.id===id);

    cartProdDivDom.innerHTML+=`<p>${chooseitem.titre}</p>`;
    let cartitems=document.querySelectorAll(".carts-products div p");
   
    badget.style.display="block";
    badget.innerHTML=cartitems.length;
};
function openCartMenu(){
    if(cartProdDivDom.innerHTML!= ""){
    cartprod.style.display="block";
}
}
