const fs = require('node:fs/promises');
const path = require('node:path');

async function generateSitemap() {
  const { default: routes } = await import('./sitemap-routes.js');
  const siteUrl = process.env.SITE_URL || process.env.URL || 'https://infinityartverse.com';
  const baseUrl = new URL(siteUrl);

  if (!['http:', 'https:'].includes(baseUrl.protocol)) {
    throw new Error(`Unsupported sitemap URL protocol: ${baseUrl.protocol}`);
  }

  if (baseUrl.pathname !== '/' || baseUrl.search || baseUrl.hash) {
    throw new Error('SITE_URL must be an origin without a path, query, or fragment.');
  }

  const urls = routes.map((route) => {
    if (typeof route !== 'string' || !route.startsWith('/') || route.startsWith('//')) {
      throw new Error(`Invalid sitemap route: ${route}`);
    }

    return new URL(route, baseUrl).href;
  });

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');

  const root = process.cwd();
  const outputPaths = [
    path.join(root, 'public', 'sitemap.xml'),
    path.join(root, 'dist', 'sitemap.xml'),
  ];

  for (const outputPath of outputPaths) {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, sitemap, 'utf8');
  }

  console.log(`Sitemap generated at ${outputPaths.join(' and ')}`);
}

generateSitemap().catch((error) => {
  console.error('Sitemap generation failed:', error);
  process.exitCode = 1;
});
