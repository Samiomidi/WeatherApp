// const withPWA = require("next-pwa");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  env: { api_key_token: "4a530acdaa2be46d057f429a4cddaf3b" },
});
