import { Directory } from "./directory";
import { File } from "./file";
import { ListVisitor } from "./listVisitor";

console.log("Making root entries ...");

const rootDir = new Directory("root");
const binDir = new Directory("bin");
const tmpDir = new Directory("tmp");
const usrDir = new Directory("usr");

rootDir.add(binDir);
rootDir.add(tmpDir);
rootDir.add(usrDir);

binDir.add(new File("vi", 10_000));
binDir.add(new File("latex", 20_000));

rootDir.accept(new ListVisitor());

console.log();
console.log("Making user entries...");

const rikiyaDir = new Directory("rikiya");
const taroDir = new Directory("taro");
const hanakoDir = new Directory("hanako");

usrDir.add(rikiyaDir);
usrDir.add(taroDir);
usrDir.add(hanakoDir);

rikiyaDir.add(new File("diary.html", 100));
rikiyaDir.add(new File("Composite.java", 200));
taroDir.add(new File("memo.tex", 300));
hanakoDir.add(new File("game.doc", 400));
hanakoDir.add(new File("junk.mail", 500));

rootDir.accept(new ListVisitor());
