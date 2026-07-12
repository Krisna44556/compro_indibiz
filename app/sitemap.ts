import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://indibizcimahi.com', lastModified: new Date() },
    { url: 'https://indibizcimahi.com/produk-digital', lastModified: new Date() },
    { url: 'https://indibizcimahi.com/artikel', lastModified: new Date() },
  ];
}