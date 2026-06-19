import fs from "fs";
import path from "path";

/** @type {import('next').NextConfig} */
const repositoryName = "PurposePathWebsite";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";

// If there's a CNAME file present, assume a custom domain and serve at domain root.
const cnamePath = path.join(process.cwd(), "CNAME");
const hasCustomDomain = fs.existsSync(cnamePath);

const basePath = isGithubPagesBuild && !hasCustomDomain ? `/${repositoryName}` : "";
const assetPrefix = isGithubPagesBuild && !hasCustomDomain ? `/${repositoryName}/` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
