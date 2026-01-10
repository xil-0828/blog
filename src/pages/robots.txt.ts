export function GET({ site }: { site?: URL }) {
	const siteUrl = site?.toString().replace(/\/$/, '') ?? '';
	const lines = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${siteUrl}/sitemap-index.xml`,
	];

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}
