import { Colleague } from "./colleague.js";
import { Mediator } from "./mediator.js";

export class ColleagueTextField implements Colleague {
  private element: Element;
  private mediator?: Mediator;

  constructor(elementId: string) {
    const maybeElement = document.getElementById(elementId);
    if (maybeElement === null) {
      throw `Element not found. id=${elementId}`;
    } else {
      this.element = maybeElement;
      this.element.addEventListener("change", () => {
        this.mediator?.colleagueChanged();
      });
    }
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean) {
    (this.element as HTMLSelectElement).disabled = !enabled;
  }

  getText(): string {
    return (this.element as HTMLInputElement).value;
  }
}
