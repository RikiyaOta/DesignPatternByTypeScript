import { BigChar } from "./bigChar";

export class BigCharFactory {
  private pool = new Map<string, BigChar>();
  private static singleton = new BigCharFactory();

  private constructor() {
    return;
  }

  public static getInstance(): BigCharFactory {
    return BigCharFactory.singleton;
  }

  public getBigChar(charName: string): BigChar {
    const maybeBigChar = this.pool.get(charName);
    if (maybeBigChar === undefined) {
      const bigChar = new BigChar(charName);
      this.pool.set(charName, bigChar);
      return bigChar;
    } else {
      return maybeBigChar;
    }
  }
}
