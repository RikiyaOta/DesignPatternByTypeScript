import { State } from "./state";
import { NightState } from "./nightState";
import { Context } from "./context";

export class DayState implements State {
  private static singleton = new DayState();

  static getInstance(): State {
    return DayState.singleton;
  }

  doClock(context: Context, hour: number) {
    if (hour < 9 || hour >= 17) context.changeState(NightState.getInstance());
  }

  doUse(context: Context) {
    context.recordLog("金庫使用（昼間）");
  }

  doAlarm(context: Context) {
    context.callSecurityCenter("非常ベル（昼間）");
  }

  doPhone(context: Context) {
    context.callSecurityCenter("通常の通話（昼間）");
  }
}
