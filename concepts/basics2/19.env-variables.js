// Check if a environment variable exists
if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY must be defined');
}

// '!' tells typescript that this variable DOES exist
process.env.JWT_KEY! 