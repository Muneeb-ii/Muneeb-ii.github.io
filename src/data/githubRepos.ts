export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
}

// Manually configured GitHub pinned repos
// Update this array with your actual pinned repositories
export const githubRepos: GitHubRepo[] = [
  // Add your pinned repos here
  // Example:
  // {
  //   name: 'monte-carlo-stocks',
  //   description: 'Portfolio simulation with risk metrics (VaR, CVaR, drawdowns)',
  //   url: 'https://github.com/muneeb-ii/monte-carlo-stocks',
  //   language: 'Python',
  //   stars: 0,
  // },
];
