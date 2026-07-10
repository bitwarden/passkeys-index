// svgo.config.mjs
export default {
  multipass: true,
  plugins: [
    // As of SVGO v4, removeViewBox is no longer part of preset-default and is
    // disabled by default — the viewBox is preserved automatically, no override needed.
    { name: "preset-default" },
    "removeDimensions",   // drop width/height, keep viewBox as the source of truth
    "removeXMLNS",        // svgo re-adds a clean xmlns on the root itself
    "removeTitle",
    "removeDesc",
    "removeComments",
    "removeMetadata",
    "removeEditorsNSData",
    "cleanupIds",
    "convertStyleToAttrs",
  ],
};