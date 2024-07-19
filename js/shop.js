
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;


function buy(id) {

    let index = cart.findIndex(product => product.id === id)

    if (index == -1){

        const product = products.find(p => p.id === id)
        product.quantity = 1;
        cart.push (product)

    }else{

        cart[index].quantity++
    }

}

function cleanCart() {

    cart.length = 0

}


function calculateTotal() {
    
    //versión con REDUCE
    //Además no necesita comprobar si hay algo en el carrito, porque ya lo hace con el 2 parametro a 0
    //totalAmount = cart.reduce((accumulator, product) => accumulator + product.price*product.quantity, 0)

    let totalAmount = 0
    
    if (cart.length==0){
        return totalAmount
    }
    
    for (let i=0; i<cart.length; i++){
        totalAmount += cart[i].price * cart[i].quantity
    }

    return totalAmount

}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}