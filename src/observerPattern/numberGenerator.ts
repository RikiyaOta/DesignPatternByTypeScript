import { Observer } from "./observer";

export abstract class NumberGenerator {
  private observers: Observer[] = [];

  public abstract getNumber(): number;
  public abstract execute(): void;

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public deleteObserver(targetObserver: Observer): void {
    const newObservers = this.observers.filter(
      (observer) => observer !== targetObserver
    );
    this.observers = newObservers;
  }

  public notifyObservers() {
    this.observers.forEach((observer) => observer.update(this));
  }
}
