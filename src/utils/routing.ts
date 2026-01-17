export const routes = {
  home: '/',
  projects: '/projects',
  projectDetail: (id: string) => `/projects/${id}`,
  experience: '/experience',
  research: '/research',
  about: '/about',
  quant: '/quant',
  contact: '/contact',
  skills: '/skills',
  achievements: '/achievements',
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
