// PROPERTY WITH SAME NAME VARIABLE
const name = 'Henrique'
const userAge = 26

const user = {
    name,  // When a property comes from an variable with the same name
    age: userAge,
    location: 'Sao Paulo' 
}

console.log(user)


// --------------------

// OBJECT DESTRUCTURING
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// Break the object into individual variables
const {label, stock} = product

console.log(label);
console.log(stock);

// Break and change variable names
const {label: productLabel, stock: productStock} = product

console.log(productLabel);
console.log(productStock);

// Default value in case object does not have a property
const {price, rating = 5} = product       // There is no rating property

console.log(price);
console.log(rating);

// Default values does not over write the original value
const { price: productPrice = 100} = product

console.log(productPrice);



// --------------------

// DESTRUCTURING IN FUNCTION ARGUMENT
const transaction = (type, { label: myLabel, stock: myStock}) => {  // Destructuring "product" properties
    console.log(myLabel)
    console.log(myStock)
}
transaction('order', product)