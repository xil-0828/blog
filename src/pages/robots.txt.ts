export function GET({ site }: { site?: URL }) {
  const siteUrl = site?.toString().replace(/\/$/, "") ?? "";

  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Disallow: /",
    "",
    "User-agent: Google-Extended",
    "Disallow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap-index.xml`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
