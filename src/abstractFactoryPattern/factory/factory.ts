import { Link } from "./link";
import { Tray } from "./tray";
import { Page } from "./page";

const toLowerFirstLetter = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

const makeModulePath = (packageName: string, className: string) => {
  return `./../${toLowerFirstLetter(packageName)}/${toLowerFirstLetter(
    className
  )}`;
};

export abstract class Factory {
  static async getFactory(
    packageName: string,
    className: string
  ): Promise<Factory> {
    // dynamic import で実現してみる
    const targetModule = await import(makeModulePath(packageName, className));
    return new targetModule[className]() as Factory;
  }

  abstract createLink(caption: string, url: string): Link;
  abstract createTray(caption: string): Tray;
  abstract createPage(title: string, author: string): Page;
}
