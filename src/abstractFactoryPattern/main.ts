import { Factory } from "./factory/factory";

if (process.argv.length <= 3) {
  console.warn(
    "Usage: node main.js package-name-of-concrete-factory class-name-of-concrete-factory"
  );
  console.warn("Example 1: node main.js listFactory ListFactory");
  console.warn("Example 1: node main.js tableFactory TableFactory");

  process.exit(1);
}

(async () => {
  const packageName = process.argv[2];
  const className = process.argv[3];
  const factory = await Factory.getFactory(packageName, className);

  const asahi = factory.createLink("朝日新聞", "http://www.asahi.com/");
  const yomiuri = factory.createLink("読売新聞", "http://www.yomiuri.co.jp/");

  const usYahoo = factory.createLink("Yahoo!", "http://www.yahoo.com/");
  const jpYahoo = factory.createLink("Yahoo!Japan", "http://www.yahoo.co.jp/");
  const excite = factory.createLink("Excite", "http://www.excite.com/");
  const google = factory.createLink("Google", "http://www.google.com/");

  const trayNews = factory.createTray("新聞");
  trayNews.add(asahi);
  trayNews.add(yomiuri);

  const trayYahoo = factory.createTray("Yahoo!");
  trayYahoo.add(usYahoo);
  trayYahoo.add(jpYahoo);

  const traySearch = factory.createTray("サーチエンジン");
  traySearch.add(trayYahoo);
  traySearch.add(excite);
  traySearch.add(google);

  const page = factory.createPage("LinkPage", "RikiyaOta");
  page.add(trayNews);
  page.add(traySearch);
  page.output();
})();
