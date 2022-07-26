import { Support } from "./support";
import { Trouble } from "./trouble";

export class SpecialSupport extends Support {
  private number: number;

  constructor(name: string, number: number) {
    super(name);
    this.number = number;
  }

  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() === this.number) {
      // 意味的には、何か解決のための処理をすべきだが、
      // 単に true を返すのみとする。
      return true;
    } else {
      return false;
    }
  }
}
