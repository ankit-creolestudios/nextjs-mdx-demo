/** @type {import('next').NextConfig} */
const path = require("path");
const withMdx = require("@next/mdx")({
  extensions: /\.mdx?$/,
});

module.exports = withMdx({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  },
  Extensions: ["js", "jsx", "mdx", "md"],
});
