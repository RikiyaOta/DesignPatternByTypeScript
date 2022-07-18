import { Database } from "./database";
import { HTMLWriter } from "./htmlWriter";

export class PageMaker {
  private constructor() {
    throw "Don't create any instance of PageMaker.";
  }

  static makeWelcomePage(mailAddress: string, fileName: string) {
    const database = new Database("maildata");
    const username = database.getUsername(mailAddress);

    if (username === undefined) {
      console.log("存在しないメールアドレスです。");
      return;
    }

    const htmlWriter = new HTMLWriter(fileName);
    htmlWriter.makeTitle(`Welcom to ${username}'s page!`);
    htmlWriter.makeParagraph(`${username}のページへようこそ。`);
    htmlWriter.makeParagraph("メール待っていますね。");
    htmlWriter.makeMailLink(mailAddress, username);
    htmlWriter.close();
    console.log(`${fileName} is created for ${mailAddress} (${username})`);
  }
}
