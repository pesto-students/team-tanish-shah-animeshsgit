let productViews = new WeakMap();

function incrementProductViews(productId) {
  if (productViews.has(productId)) { //If the product is present this will increase the count of the view
    let currentValue = productViews.get(productId);
    currentValue++;
    productViews.set(productId, currentValue);
  }
  else {
    productViews.set(productId, 1);
  }
  console.log("Current visit of product is-> " + productViews.get(productId));
}

let product1 = { book: "Ramayan" };
incrementProductViews(product1); //OUTPUT: Current visit of product is-> 1
incrementProductViews(product1); //OUTPUT: Current visit of product is-> 2

let productCart = new WeakMap();

function addToCart(productId) {
  if(productCart.has(productId)){
    console.log("Product already in cart");
  }
  else{ // If the product is not present in the cart this will add it
    productCart.set(productId, 1);
    console.log("Product added to cart")
  }
}

addToCart(product1); //OUTPUT: Product added to cart
addToCart(product1); //OUTPUT: Product already in cart