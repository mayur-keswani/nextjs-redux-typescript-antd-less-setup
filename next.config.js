/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withLess = require("next-plugin-antd-less");

module.exports = withPlugins([[withLess]], {
  reactStrictMode: false,

});
