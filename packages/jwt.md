# JWT

```js
// Generate JWT
const userJwt = jwt.sign(
  {
    id: user.id,
    email: user.email
  },
  'mypass' // The key is used to know if the token is valid
);

// Store jwt in Session (Cookie)
req.session = { jwt: userJwt }; // It is encoded to base 64 string. NOT UTF-8

// https://www.base64decode.org/
// Convert base 64 str to UT8

// http://jwt.io
// Convert jwt to UTF-8

// jwt can be seen even with invalid token
```
