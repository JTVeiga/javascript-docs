const credentials = {
  user: "abc123",
  email: "test@test.com",
};

// Turn the session object into JSON
const credentialsJson = JSON.stringify(credentials);

// Encode it as base64
const credentialsBase64 = Buffer.from(credentialsJson).toString("base64");

console.log(credentialsBase64);
