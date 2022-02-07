// Curring
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(`Preço Final R$ ${nycFinalPrice(25.1)}`)
console.log(`Preço Final R$ ${nycFinalPrice(21.7)}`)
console.log(`Preço Final R$ ${nycFinalPrice(107.9)}`)

