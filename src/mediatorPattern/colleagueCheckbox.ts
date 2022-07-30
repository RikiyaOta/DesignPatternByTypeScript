import { Colleague } from "./colleague.js";
import { Mediator } from "./mediator.js";

export class ColleagueCheckbox implements Colleague {
  private element: Element;
  private mediator?: Mediator;

  constructor(elementId: string, enabled: boolean) {
    const maybeElement = document.getElementById(elementId);
    if (maybeElement === null) {
      throw `Element not found. id=${elementId}`;
    } else {
      this.element = maybeElement;
      (this.element as HTMLInputElement).checked = enabled;
      this.element.addEventListener("change", () => {
        // NOTE: radio ボタンのイベントは、選択された時のみ発火される。
        // なので、問答無用で true に変える
        (this.element as HTMLInputElement).checked = true;
        this.mediator?.colleagueChanged();
      });
    }
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean) {
    // ここは呼ばれない
  }

  isChecked(): boolean {
    return (this.element as HTMLInputElement).checked;
  }
}
