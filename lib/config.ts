// API Configuration (monolithic: defaults to same-origin /api when NEXT_PUBLIC_API_URL is unset)
const externalApi = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '') || '';
const API_BASE =
  externalApi ||
  (typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
export const API_CONFIG = {
  baseURL: `${API_BASE}/api`,
  timeout: 10000,
};

// Feature flags
export const FEATURES = {
  useAPI: process.env.NEXT_PUBLIC_USE_API !== 'false', // Set to 'false' to use hardcoded data
};
