import _ from "lodash";
import { DirectoryEntry } from "./directoryEntry";

export class File extends DirectoryEntry {
  constructor(private name: string, private size: number) {
    super();
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }

  public print(prefix?: string): void {
    if (_.isUndefined(prefix)) {
      console.log(`/${this.toString()}`);
    } else {
      console.log(`${prefix}/${this.toString()}`);
    }
  }
}
