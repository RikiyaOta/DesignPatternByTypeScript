import { Support } from "./support";
import { Trouble } from "./trouble";

export class LimitSupport extends Support {
  private limit: number;

  constructor(name: string, limit: number) {
    super(name);
    this.limit = limit;
  }

  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() < this.limit) {
      // 意味的には、何か解決のための処理をすべきだが、
      // 単に true を返すのみとする。
      return true;
    } else {
      return false;
    }
  }
}
