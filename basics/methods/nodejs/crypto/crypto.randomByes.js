import { randomByes } from "crypto";
const random = randomByes(4).toString("hex");
console.log(random);
