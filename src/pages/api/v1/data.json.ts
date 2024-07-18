import { type Tokens } from "marked";
import { getReadMeData } from "../../../utils/markdown";

const SITE_URL = import.meta.env.SITE_URL;

const formatLogo = (logo: string) => {
  return (
    logo?.match(/!\[.*\]\((.*)\)/)?.[1]?.replace(/^\/public/, SITE_URL) || ""
  );
};

const formatFeatures = (features: string) => {
  return {
    login: features.includes("Login"),
    mfa: features.includes("MFA"),
  };
};

const formatSiteUrl = (url: string) => {
  return url.match(/.*\((.*)\)/)?.[1] || "";
};

function parseMarkdownTable(
  tableToken: Tokens.Table
): Record<string, string>[] {
  const headers = tableToken.header.map((cell) => cell.text);
  const rows = tableToken.rows.map((row) => row.map((cell) => cell.text));

  return rows.map((row) => {
    const rowObject: Record<string, string> = {};
    headers.forEach((header: string, index: number) => {
      let key = header.toLowerCase().replace(/[\s\/]/g, "_");
      let value: any = row[index];
      if (header === "Logo") {
        value = formatLogo(value);
      }
      if (header === "Features") {
        value = formatFeatures(value);
      }
      if (header === "Site URL") {
        value = formatSiteUrl(value);
      }

      rowObject[key] = value;
    });
    return rowObject;
  });
}

export async function GET() {
  const data = getReadMeData();
  const parsed = {
    platforms: parseMarkdownTable(data.platforms),
    websites: parseMarkdownTable(data.websites),
    developerTools: parseMarkdownTable(data.developerTools),
    securityKeys: parseMarkdownTable(data.securityKeys),
  };
  return new Response(JSON.stringify(parsed));
}
