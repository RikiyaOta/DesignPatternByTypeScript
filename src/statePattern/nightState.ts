import { State } from "./state";
import { DayState } from "./dayState";
import { Context } from "./context";

export class NightState implements State {
  private static singleton = new NightState();

  public static getInstance(): State {
    return NightState.singleton;
  }

  doClock(context: Context, hour: number) {
    if (9 <= hour && hour < 17) context.changeState(DayState.getInstance());
  }

  doUse(context: Context) {
    context.callSecurityCenter("非常：夜間の金庫使用！");
  }

  doAlarm(context: Context) {
    context.callSecurityCenter("非常ベル（夜間）");
  }

  doPhone(context: Context) {
    context.recordLog("夜間の通話録音");
  }
}
