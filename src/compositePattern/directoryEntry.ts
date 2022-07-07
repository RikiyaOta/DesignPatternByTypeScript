import { FileTreatmentException } from "./fileTreatmentException";

export abstract class DirectoryEntry {
  public abstract getName(): string;
  public abstract getSize(): number;
  public abstract print(prefix?: string): void;

  public add(_directoryEntry: DirectoryEntry): DirectoryEntry | never {
    throw new FileTreatmentException();
  }

  public toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}
