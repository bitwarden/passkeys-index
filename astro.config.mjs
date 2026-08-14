import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const SITE_URL = import.meta.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx()],
});
