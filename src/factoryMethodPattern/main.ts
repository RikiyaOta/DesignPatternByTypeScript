import { Factory } from "./framework/factory";
import { Product } from "./framework/product";
import { IDCardFactory } from "./idcard/idCardFactory";

const factory: Factory = new IDCardFactory();
const card1: Product = factory.create("UserA");
const card2: Product = factory.create("UserB");
const card3: Product = factory.create("UserC");

card1.use();
card2.use();
card3.use();

console.log(
  "IDCardFactory の owner は、",
  (factory as IDCardFactory).getOwners()
);
