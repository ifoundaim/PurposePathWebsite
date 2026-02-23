/** @type {import('next').NextConfig} */
const repositoryName = "PurposePathWebsite";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPagesBuild ? `/${repositoryName}` : "",
  assetPrefix: isGithubPagesBuild ? `/${repositoryName}/` : "",
};

export default nextConfig;
