/** Prefix public asset paths with the Next.js `basePath` (GitHub Pages `/Portfolio`). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!path.startsWith('/') || path.startsWith('http')) return path;
  return `${base}${path}`;
}
