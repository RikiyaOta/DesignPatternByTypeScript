import { Product } from "./../framework/product";

export class IDCard extends Product {
  public constructor(private owner: string) {
    super();
    console.log(this.owner + "のカードを作ります。");
  }

  public use(): void {
    console.log(this.owner + "のカードを使います！");
  }

  public getOwner(): string {
    return this.owner;
  }
}
