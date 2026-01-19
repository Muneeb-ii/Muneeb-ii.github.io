export const routes = {
  home: '/',
  projects: '/projects',
  projectDetail: (id: string) => `/projects/${id}`,
  experience: '/experience',
  about: '/about',
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
