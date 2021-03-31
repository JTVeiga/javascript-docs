// Default value when no parameter is provided
const greeter = (name = 'User') => {
    console.log(`Hello ${name}`) 
}

greeter('Henrique')
greeter()


// -----

const product = {
    name: 'Engine',
    price: 250
}

const transaction = (type, {name, price} = {}) => {
    console.log(type, name, price)  
}

transaction('buy', product)
transaction('buy')  // transaction is peformed even if product is undefined (could not be destructed)
