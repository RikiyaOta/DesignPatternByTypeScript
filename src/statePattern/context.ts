import { State } from "./state";

export interface Context {
  callSecurityCenter(message: string): void;
  changeState(state: State): void;
  recordLog(message: string): void;
  setClock(hour: number): void;
}
