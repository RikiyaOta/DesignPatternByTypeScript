import { Factory } from "./../framework/factory";
import { Product } from "./../framework/product";
import { IDCard } from "./idCard";

export class IDCardFactory extends Factory {
  private owners: string[] = [];

  protected createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  protected registerProduct(product: Product): void {
    const owner = (product as IDCard).getOwner();
    this.owners.push(owner);
  }

  public getOwners() {
    return this.owners;
  }
}
