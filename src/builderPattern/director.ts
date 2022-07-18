import { Builder } from "./builder";

export class Director {
  constructor(private builder: Builder) {}

  construct() {
    this.builder.makeTitle("Greeting");
    this.builder.makeString("朝から昼にかけて");
    this.builder.makeItems(["おはようございます。", "こんにちは。"]);
    this.builder.makeString("夜に");
    this.builder.makeItems([
      "こんばんは。",
      "おやすみなさい。",
      "さようなら。",
    ]);
    this.builder.close();
  }
}
