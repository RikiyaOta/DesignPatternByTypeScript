export class Singleton {
  private static singleton: Singleton = new Singleton();

  private constructor() {
    console.log("Construct a instance!");
  }

  public static getInstance() {
    return Singleton.singleton;

    // Do not construct new instances like below:
    // return new Singleton();
  }
}
