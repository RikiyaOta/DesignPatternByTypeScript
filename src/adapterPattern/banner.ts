export class Banner {
  constructor(private string: string) {}

  showWithParen() {
    console.log(`(${this.string})`);
  }

  showWithAster() {
    console.log(`*${this.string}*`);
  }
}
