import { File } from "./file";
import { Directory } from "./directory";

export interface Visitor {
  visit(file: File): void;
  visit(directory: Directory): void;
}
