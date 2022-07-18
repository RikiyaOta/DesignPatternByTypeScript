import fs from "fs";
import path from "path";

export class Database {
  private userDict = new Map<string, string>();

  constructor(dbName: string) {
    const fileName = `${dbName}.txt`;
    const filePath = path.resolve(__dirname, fileName);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const validLinePattern = /^[^=]+=[^=]+$/;
    fileContent.split("\n").forEach((line) => {
      if (validLinePattern.test(line)) {
        const [mailAddress, name] = line.split("=");
        this.userDict.set(mailAddress, name);
      }
    });
  }

  getUsername(mailAddress: string): string | undefined {
    return this.userDict.get(mailAddress);
  }
}
