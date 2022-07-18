import { PageMaker } from "./pageMaker";

if (process.argv.length <= 2) {
  console.log("Usage: node main.js MAIL_ADDRESS");
} else {
  const mailAddress = process.argv[2];
  const fileName = `welcome-${mailAddress}-${Date.now()}.html`;
  PageMaker.makeWelcomePage(mailAddress, fileName);
}
