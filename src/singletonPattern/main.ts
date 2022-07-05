import { Singleton } from "./singleton";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Start!");

if (singleton1 === singleton2) {
  console.log("singleton1 is the same instance with singleton2 !");
} else {
  console.log("singleton1 is the NOT same instance with singleton2...");
}

console.log("End!");
