import _ from "lodash";
import { DirectoryEntry } from "./directoryEntry";

export class Directory extends DirectoryEntry {
  private name: string;
  private directoryEntries: DirectoryEntry[];

  constructor(name: string) {
    super();
    this.name = name;
    this.directoryEntries = [];
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    const initSize = 0;
    return _.reduce(
      this.directoryEntries,
      (accSize, directoryEntry) => accSize + directoryEntry.getSize(),
      initSize
    );
  }

  public print(prefix?: string): void {
    const fixedPrefix = _.isUndefined(prefix) ? "" : prefix;
    console.log(`${fixedPrefix}/${this.toString()}`);
    _.each(this.directoryEntries, (directoryEntry) =>
      directoryEntry.print(`${fixedPrefix}/${this.name}`)
    );
  }

  public override add(directoryEntry: DirectoryEntry): DirectoryEntry {
    this.directoryEntries.push(directoryEntry);
    return this;
  }
}
