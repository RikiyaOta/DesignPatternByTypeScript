import { Support } from "./support";
import { Trouble } from "./trouble";

export class OddSupport extends Support {
  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() % 2 === 1) {
      // 意味的には、何か解決のための処理をすべきだが、
      // 単に true を返すのみとする。
      return true;
    } else {
      return false;
    }
  }
}
