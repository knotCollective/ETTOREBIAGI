const rawBase = import.meta.env.BASE_URL;

export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function url(path = ''): string {
  return `${base}${path.replace(/^\//, '')}`;
}
