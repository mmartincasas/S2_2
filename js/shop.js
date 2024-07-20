
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
    printCart()

}


function calculateTotal() { //REVISAR SI FUNCIONA BIEN!
    
    let totalAmount = 0
    
    if (cart.length==0){
        return totalAmount
    }

    applyPromotionsCart()
    
    for (let i=0; i<cart.length; i++){

        /*
        let product = cart[i]
        let finalPrice = (product.subtotalWithDiscount) ? product.subtotalWithDiscount : product.price
        totalAmount += finalPrice * product.quantity*/

        let product = cart[i]
        let TotalPriceProduct = calculateTotalByProduct(product)
        totalAmount += TotalPriceProduct

    }

    return totalAmount

}

/*Función nueva: calcula el total de un producto concreto, 
    Parametro de entrada: objeto producto, parametro salida: precio final producto*/

function calculateTotalByProduct (product) {

    let finalPrice = (product.subtotalWithDiscount) ? product.subtotalWithDiscount : product.price
    let totalProduct = finalPrice*product.quantity
    return totalProduct
    
}



function applyPromotionsCart() {
    
    for (let i=0; i<cart.length; i++){

        let product = cart[i]

        if (product.offer){

            const {number, percent} = product.offer

            if (product.quantity >= number){

                let discount = (100 - percent)/100
                product.subtotalWithDiscount = product.price * discount

            }

        }

    }

}



function printCart() {

    const cartList = document.getElementById('cart_list')
    cartList.innerHTML = ''

    let totalPriceElement = document.getElementById('total_price')
    totalPriceElement.innerHTML = calculateTotal().toFixed(2)

    cart.forEach( product =>{
            const row = document.createElement("tr")

            //PREGUNTAR SI ASÍ ESTÁ OK, O TENDRIA QUE HACERLO DE OTRA FORMA
            row.innerHTML = `
                <th scope="row">${product.name}</th>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${calculateTotalByProduct(product).toFixed(2)}</td>
            `
            cartList.appendChild(row);
        }
    )

}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}