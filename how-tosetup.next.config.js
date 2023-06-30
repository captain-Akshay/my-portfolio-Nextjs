/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_AUTH_TOKEN: "",
    mongodb_username: "",
    mongodb_password: "",
    mongodb_clustername: "",
  },
};

module.exports = nextConfig;
