
 let carts= document.querySelectorAll(".add-cart");

let products=[
    {
        name: 'chicken',
        tag: 'chickenkerhai',
        price: 1500,
     
    },
    {
        name: 'Tikka',
        tag: 'chickentikka',
        price: 250,
       
    },
    {
        name: 'Mutton',
        tag: 'muttonkerhai',
        price: 1000,
        
    }
]

for( let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadcartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span') . textContent = productNumbers;
    }
}


function cartNumbers(product){

     let productNumbers=localStorage.getItem('cartNumbers');
   
     productNumbers = parseInt(productNumbers);

        
 if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1);
     document.querySelector('.cart span') . textContent = productNumbers + 1;
 }else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span') . textContent = 1; 
}
    setItems(product);

 }


function setItems(product){

   let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){

        if( cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;

    }else{
        product.inCart = 1;
        cartItems = {
           [product.tag]:product
       }
    }

    localStorage.setItem('productsInCart', JSON.stringify 
    (cartItems));


}

function totalCost(product){

let cartCost = localStorage.getItem('totalCost');


    if(cartCost != null){
    cartCost=parseInt(cartCost);
    localStorage.setItem('totalcost',cartCost +
     product.price);
    }else{
    localStorage.setItem('totalCost', product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);
  
      let productContainer=document.querySelector
      (".products-container");
    if(cartItems && productContainer){
     
      productContainer.innerHTML ='';
  
      Object.values(cartItems) .map (item =>{
      productContainer.innerHTML += `
      <div class=products>
      <ion-icon name = "close-circle"></ion-icon>
      <img src = "./images/$(items.tag).jpg">
      <span>$(item.name)</span>
      </div>
      `
      });
          
          
    }
  }


displayCart();
 onLoadcartNumbers();
