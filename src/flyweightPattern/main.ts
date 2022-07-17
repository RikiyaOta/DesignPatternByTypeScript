import { BigString } from "./bigString";

if (process.argv.length <= 2) {
  console.log("Usage: node /path/to/main.js digits");
  console.log("Example: node /path/to/main.js 1212123");
} else {
  const inputString = process.argv[2];
  const bigString = new BigString(inputString);
  bigString.print();
}
