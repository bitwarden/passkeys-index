import { Lexer, marked, parse, type Token, type Tokens } from "marked";
import * as passkeyIndexMd from "../../README.md";

export function getReadMeData() {
  const markdown = passkeyIndexMd.rawContent();
  const content = marked.lexer(markdown);

  return content.reduce(
    (acc, item, index, array) => {
      if (item.type !== "heading") return acc;
      if (item.text?.includes("{#platforms}")) {
        acc.platforms = array[index + 1] as Tokens.Table;
      } else if (item.text?.includes("{#websites}")) {
        acc.websites = array[index + 1] as Tokens.Table;
      } else if (item.text?.includes("{#developer-tools}")) {
        acc.developerTools = array[index + 1] as Tokens.Table;
      } else if (item.text?.includes("{#security-keys}")) {
        acc.securityKeys = array[index + 1] as Tokens.Table;
      }
      return acc;
    },
    {} as {
      platforms: Tokens.Table;
      websites: Tokens.Table;
      developerTools: Tokens.Table;
      securityKeys: Tokens.Table;
    }
  );
}
