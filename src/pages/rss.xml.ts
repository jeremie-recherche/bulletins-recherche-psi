import { getCollection } from 'astro:content';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char);

export async function GET({ site }: { site: URL }) {
  const posts = (await getCollection('bulletins', ({ data }) => !data.draft)).sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  const root = new URL('/bulletins-recherche-psi/', site);
  const items = posts.map((post) => {
    const link = new URL(`bulletins/${post.id}/`, root).href;
    return `<item><title>${escapeXml(post.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${post.data.publishedAt.toUTCString()}</pubDate><description>${escapeXml(post.data.description)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Bulletins de la recherche psi</title><link>${root.href}</link><description>Analyses critiques de publications en parapsychologie, anomalistique et sciences de la conscience.</description><language>fr</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
