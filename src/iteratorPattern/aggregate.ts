import { Iterator } from "./iterator";

export interface Aggregate<T> {
  iterator(): Iterator<T>;
}
