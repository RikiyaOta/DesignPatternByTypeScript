import { Context } from "./context";
import { State } from "./state";
import { DayState } from "./dayState";

export type ButtonType = "Use" | "Alarm" | "Phone";

export class SafeFrame implements Context {
  private state: State;

  constructor(hour: number) {
    this.state = DayState.getInstance();
    this.setClock(hour);
  }

  clickButton(buttonType: ButtonType) {
    switch (buttonType) {
      case "Use":
        this.state.doUse(this);
        break;
      case "Alarm":
        this.state.doAlarm(this);
        break;
      case "Phone":
        this.state.doPhone(this);
        break;
    }
  }

  setClock(hour: number) {
    console.log(`${hour.toString().padStart(2, "0")}:00`);
    this.state.doClock(this, hour);
  }

  changeState(state: State) {
    console.log(this.state, "から", state, "へ状態が変化しました。");
    this.state = state;
  }

  callSecurityCenter(message: string) {
    console.log("Call!", message);
  }

  recordLog(message: string) {
    console.log("record ...", message);
  }
}
