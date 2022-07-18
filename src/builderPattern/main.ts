import { Director } from "./director";
import { TextBuilder } from "./textBuilder";
import { HTMLBuilder } from "./htmlBuilder";

const displayUsage = () => {
  console.log("Usage: node main.js DOC_TYPE");
  console.log("Valid DOC_TYPE: 'plain', 'html'");
};

const isPlain = () => process.argv[2] === "plain";
const isHTML = () => process.argv[2] === "html";

if (process.argv.length <= 2) {
  displayUsage();
} else if (isPlain()) {
  const textBuilder = new TextBuilder();
  const director = new Director(textBuilder);
  director.construct();
  console.log(textBuilder.getResult());
} else if (isHTML()) {
  const fileName = `builder-${Date.now()}.html`;
  const htmlBuilder = new HTMLBuilder(fileName);
  const director = new Director(htmlBuilder);
  director.construct();
  console.log(`${fileName}が作成されました。`);
} else {
  displayUsage();
}
