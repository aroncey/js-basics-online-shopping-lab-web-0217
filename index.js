var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  let itemPrice = Math.floor(Math.random() * 100)
  let key = item
  let obj = {}
  obj[item] = itemPrice
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
const l = cart.length
  if(!l){
    console.log('Your shopping cart is empty.')
  }
  let itemPricePairs = []
      for(var i = 0; i<l;i++){
        let itemAndPrice = cart[i]
        let item = Object.keys(itemAndPrice)[0]
        let price = itemAndPrice[item]
        itemPricePairs.push(`${item} at $${price}`)
      }
    console.log(`In your cart, you have ${itemPricePairs.join(', ')}.`)
}

function removeFromCart(item){
  let itemInCart = false
  for (let i = 0, l = cart.length; i < l; i++) {
      console.log(cart)
      console.log(cart[i])
      if (cart[i].hasOwnProperty(item)) {
        itemInCart = true
        cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
    }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(creditCardNumber){
  if(!creditCardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
  }

  cart = []
}


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
