import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { publishedProjects } from "@/content/projects";
import { publishedResources } from "@/content/resources";
import { siteSettings } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteSettings.url;
  const staticRoutes = ["", "/our-story", "/what-we-do", "/projects", "/where-we-work", "/ways-to-give", "/donate", "/volunteer", "/request-support", "/partner", "/transparency", "/resources", "/updates", "/media", "/contact", "/thank-you", "/donation-thank-you", "/privacy-policy", "/terms-of-use", "/donation-policy", "/accessibility", "/safeguarding", "/website-disclaimer"];
  const projectRoutes = publishedProjects.map((project) => `/projects/${project.slug}`);
  const resourceRoutes = publishedResources.filter((resource) => resource.active).map((resource) => `/resources/${resource.slug}`);
  const articleRoutes = articles.filter((article) => !article.demoContent).map((article) => `/updates/${article.slug}`);
  return [...staticRoutes, ...projectRoutes, ...resourceRoutes, ...articleRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
