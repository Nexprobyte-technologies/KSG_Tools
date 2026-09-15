import type { MetadataRoute } from "next";

const BASE_URL = "https://ksg-tools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/videos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/photos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Product detail pages — extend as new slugs are added
  const productSlugs = [
    "10-inch-double-shaft-shredder-knives",
    "shredding-machine-knives-and-blades",
    "shredder-blade-manufacturer-for-industrial",
    "mild-steel-shredder-blade",
    "shredder-knives-for-industrial",
    "8mm-agricultural-shredder-knives",
    "8-inch-double-shaft-shredder-knives",
    "chicken-cutting-shredder-knives",
    "plastic-shredder-knives",
    "plastic-shredder-knives-2",
  ];

  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticPages, ...productPages];
}