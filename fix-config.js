const fs = require('fs');
const config = /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
};
export default nextConfig;;
fs.writeFileSync('next.config.mjs', config, 'utf8');
console.log('Done');
