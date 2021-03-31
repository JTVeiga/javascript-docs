// Promises is an enchancement for callback

// Function
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Yes')  // Either "resolve" or "reject" is run! Never both
    }, 2000)
    setTimeout(() => {
        reject('No')    // This reject world be displayed first, because it finalized first! (1s)
    }, 1000)
    setTimeout(() => {
        reject('Nooo!')    // Can also have multiple reject/resolve
    }, 500)
})

// Call function
myPromise.then((result) => {    //if success
    console.log('Sucess!', result);                 // result is the data of resolve
}).catch((error) => {          //if fails
    console.log('Error!', error);                   // error is the data of reject
})












// Promise function with additional parameters
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

// Call
add(1,2).then((sum) => {
    console.log(sum)
}).catch((err) => {
    console.log(err)
})

// Call Chaining
add(1,2).then((sum) => {
    console.log(sum)

    add(sum, 5).then((sum2) => {
        console.log(sum2)           // Confusing code!
    }).catch((err) => {
        console.log(err)
    })

}).catch((err) => {
    console.log(err)
})