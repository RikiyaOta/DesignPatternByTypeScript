import { Product } from "./product";

export abstract class Factory {
  public create(owner: string): Product {
    const product = this.createProduct(owner);
    this.registerProduct(product);
    return product;
  }
  protected abstract createProduct(owner: string): Product;
  protected abstract registerProduct(product: Product): void;
}
