// Watch events
process.on("SIGINT", () => console.log("Closing")); // Watch for interrupt signals
process.on("SIGTERM", () => console.log("Closing")); // Watch for terminate signals