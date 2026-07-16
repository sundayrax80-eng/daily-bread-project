import type { MetadataRoute } from "next";
import { siteSettings } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/donate/payment", "/donate/thank-you", "/thank-you", "/donation-thank-you"],
    },
    sitemap: `${siteSettings.url}/sitemap.xml`,
  };
}
