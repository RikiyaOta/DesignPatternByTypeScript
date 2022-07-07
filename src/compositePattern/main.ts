import { Directory } from "./directory";
import { File } from "./file";

try {
  console.log("Making root entries...");

  const rootDir = new Directory("root");
  const binDir = new Directory("bin");
  const tmpDir = new Directory("tmp");
  const usrDir = new Directory("usr");

  rootDir.add(binDir);
  rootDir.add(tmpDir);
  rootDir.add(usrDir);

  binDir.add(new File("vi", 10_000));
  binDir.add(new File("latex", 20_000));

  rootDir.print();

  console.log("");
  console.log("Making user entries...");

  const rikiyaDir = new Directory("rikiya");
  const hanakoDir = new Directory("hanako");
  const taroDir = new Directory("taro");

  usrDir.add(rikiyaDir);
  usrDir.add(hanakoDir);
  usrDir.add(taroDir);

  rikiyaDir.add(new File("diary.html", 100));
  rikiyaDir.add(new File("composite.ts", 200));

  hanakoDir.add(new File("memo.tex", 300));

  taroDir.add(new File("game.doc", 400));
  taroDir.add(new File("junk.mail", 500));

  rootDir.print();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.toString());
  }
}
