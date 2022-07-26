import { Support } from "./support";
import { Trouble } from "./trouble";

export class NoSupport extends Support {
  // 何も解決しない
  protected resolve(_trouble: Trouble): boolean {
    return false;
  }
}
