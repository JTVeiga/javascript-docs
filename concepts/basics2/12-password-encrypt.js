const bcrypt = require('bcryptjs')

cost myFunction = async () => {
    const password = 'oi12345'
    const hashedPassword = await bcrypt.hash(password, 8)   // 8 rounds of encypt

    console.log(password)
    console.log(hashedPassword)

    const isPasswordCorrect = await bcrypt.compare('oi12345', hashedPassword)
    console.log(isPasswordCorrect)      
}

myFunction()