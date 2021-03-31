// Create a cookie
const signup = async () => {
  // Build a JWT payload. { id, email}
  const payload = {
    id: 'abc123',
    email: 'test@test.com'
  };

  // Create the JWT (sign)
  const token = jwt.sign(payload, 'asdf');

  // Build the session object { jwt: MY_JWT }
  const session = { jwt: token };

  // Turn the session object into JSON
  const sessionJSON = JSON.stringify(session);

  // Encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // Return the session encoded object as a cookie (express:sess=)
  return [`express:sess=${base64}`];
};

console.log(signup());
