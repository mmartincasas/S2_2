
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

let count_product = document.getElementById('count_product')
count_product.innerHTML = 0

function buy(id) {

    let index = cart.findIndex(product => product.id === id)

    if (index == -1){

        const product = products.find(p => p.id === id)
        product.quantity = 1;
        cart.push (product)

    }else{

        cart[index].quantity++
    }

    count_product.innerHTML++

}

function cleanCart() {

    cart.forEach(product => delete product.subtotalWithDiscount)
    count_product.innerHTML = 0

    cart.length = 0
    printCart()

}


function calculateTotal() {
    
    let totalAmount = 0
    
    if (cart.length==0){
        return totalAmount
    }

    applyPromotionsCart()
    
    for (let i=0; i<cart.length; i++){

        let product = cart[i]
        let TotalPriceProduct = calculateTotalByProduct(product)
        totalAmount += TotalPriceProduct

    }

    return totalAmount

}


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

            row.innerHTML = `
                <td>
                    <button type="button" class="btn remove-button" onclick="removeFromCart(${product.id})">-</button>
                </td>
                <td>
                <button type="button" class="btn add-button" onclick="addFromCart(${product.id})">+</button>
                </td>
                <th scope="row">${product.name}</th>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${calculateTotalByProduct(product).toFixed(2)}</td>
            `
            cartList.appendChild(row);
        }
    )

}

function removeFromCart(id) {

    let index = cart.findIndex(product => product.id === id)

    let product = cart[index]

    if (product.quantity==1){
        product => delete product.subtotalWithDiscount
        cart.splice(index,1)

    }else{

        product.quantity--

        if (product.offer){
            const {number} = product.offer
            if (product.quantity < number){
                delete cart[index].subtotalWithDiscount
            }
        }
    }

    count_product.innerHTML--

    printCart()

}



function addFromCart(id){
    buy(id)
    printCart()
}


function open_modal() {
    printCart();
}