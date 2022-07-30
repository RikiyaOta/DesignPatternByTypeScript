import { Colleague } from "./colleague.js";
import { Mediator } from "./mediator.js";

export class ColleagueButton implements Colleague {
  private element: Element;
  private mediator?: Mediator;

  constructor(elementId: string) {
    const maybeElement = document.getElementById(elementId);
    if (maybeElement === null) {
      throw `Element not found. id=${elementId}`;
    } else {
      this.element = maybeElement;
      this.element.addEventListener("click", () => {
        window.alert(
          `You have clicked ${(this.element as HTMLElement).innerText} button!`
        );
      });
    }
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean) {
    (this.element as HTMLButtonElement).disabled = !enabled;
  }
}
