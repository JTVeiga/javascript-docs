const jwt = require('jsonwebtoken')

const myFunction = async () => {
    // sign() returns the authentication token      // token: header.payload(body).signature
    const token = jwt.sign({ _id:'abc123'}, 'thismynewtoken', {expiresIn: '7 seconds'})      //sign(data,signature, options)
    console.log(token)
    
    // verify() returns the payload of the token if the signature is correct
    const data = jwt.verify(token,'thismynewtoken')
    console.log(data);
    
}
myFunction()