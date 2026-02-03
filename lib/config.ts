// API Configuration
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
};

// Feature flags
export const FEATURES = {
  useAPI: process.env.NEXT_PUBLIC_USE_API !== 'false', // Set to 'false' to use hardcoded data
};
