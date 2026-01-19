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
  {
    name: 'monte-carlo-simulation-for-stocks',
    description: 'Portfolio Monte Carlo simulation with risk/return statistics (VaR, CVaR)',
    url: 'https://github.com/Muneeb-ii/monte-carlo-simulation-for-stocks',
    language: 'Python',
  },
  {
    name: 'Crypto-Price-Predictor',
    description: 'ML/DL models to forecast cryptocurrency prices using historical data via API',
    url: 'https://github.com/Muneeb-ii/Crypto-Price-Predictor',
    language: 'Python',
  },
  {
    name: 'RetroVault',
    description: 'Built at BostonHacks 2025 - web app for digital preservation',
    url: 'https://github.com/Muneeb-ii/RetroVault',
    language: 'JavaScript',
  },
  {
    name: 'MultiSOCIAL_toolbox',
    description: 'Toolbox for multimodal interaction analysis: text, audio, video',
    url: 'https://github.com/Muneeb-ii/MultiSOCIAL_toolbox',
    language: 'Python',
  },
  {
    name: 'Pgfplots-Generator',
    description: 'Python script to generate LaTeX/TikZ PGFPlots code for math plotting',
    url: 'https://github.com/Muneeb-ii/Pgfplots-Generator',
    language: 'Python',
  },
  {
    name: 'Searching_on_a_Grid',
    description: 'Graph search algorithms: BFS, DFS, A* on grid-based environments',
    url: 'https://github.com/Muneeb-ii/Searching_on_a_Grid',
    language: 'Java',
  },
];
