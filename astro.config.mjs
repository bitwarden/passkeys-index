import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

const SITE_URL = import.meta.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), tailwind()],
});
