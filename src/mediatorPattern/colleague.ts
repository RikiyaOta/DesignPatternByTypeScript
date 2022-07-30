import { Mediator } from "./mediator";

export interface Colleague {
  setMediator(mediator: Mediator): void;

  // 自分で有効無効を判断するのではなく、
  // あくまでMediatorの指示に従って状態を変化させるのがポイント
  setColleagueEnabled(enabled: boolean): void;
}
