// Monolithic: use same-origin /api when NEXT_PUBLIC_API_URL is unset. Do NOT set NEXT_PUBLIC_API_URL to a separate backend URL unless you run one.
const externalApi = (process.env.NEXT_PUBLIC_API_URL ?? '').trim().replace(/\/api\/?$/, '') || '';
const isBrowser = typeof window !== 'undefined';
const API_BASE =
  externalApi || (isBrowser ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const API_ROOT = `${API_BASE}/api`;

// Generic fetch function with error handling
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_ROOT}${endpoint}`;
  try {
    const response = await fetch(url, {
      ...options,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = (data && typeof data.message === 'string') ? data.message : response.statusText;
      throw new Error(message ? `${message} (${response.status} ${url})` : `API Error: ${response.status} ${url}`);
    }

    return data;
  } catch (error) {
    const msg = (error as Error).message ?? '';
    const isNetworkError =
      error instanceof TypeError ||
      msg === 'Failed to fetch' ||
      msg === 'fetch failed' ||
      msg.includes('fetch failed') ||
      msg.includes('Failed to fetch');
    if (isNetworkError) {
      const friendly = new Error(
        API_ROOT
          ? `Cannot reach the API at ${API_ROOT}. Make sure the dev server is running (e.g. \`npm run dev\` in travel-blog-frontend).`
          : `Cannot reach the API. Make sure the app is running (e.g. \`npm run dev\`).`
      );
      console.warn(friendly.message);
      throw friendly;
    }
    console.error('API fetch error:', error);
    throw error;
  }
}

// Posts API
export const postsAPI = {
  getAll: (params?: { featured?: boolean; limit?: number; offset?: number }) => {
    const queryParams = new URLSearchParams();
    if (params?.featured) queryParams.append('featured', 'true');
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.offset) queryParams.append('offset', params.offset.toString());
    
    const query = queryParams.toString();
    return fetchAPI(`/posts${query ? `?${query}` : ''}`);
  },
  getById: (id: number) => fetchAPI(`/posts/${id}`),
};

// Post comments API
export const commentsAPI = {
  getByPostId: (postId: number) => fetchAPI(`/posts/${postId}/comments`),
  add: (postId: number, data: { author_name: string; author_email: string; content: string }) =>
    fetchAPI(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Destinations API
export const destinationsAPI = {
  getAll: (params?: { continent?: string; limit?: number }) => {
    const queryParams = new URLSearchParams();
    if (params?.continent) queryParams.append('continent', params.continent);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const query = queryParams.toString();
    return fetchAPI(`/destinations${query ? `?${query}` : ''}`);
  },
  getById: (id: number) => fetchAPI(`/destinations/${id}`),
};

// Tips API
export const tipsAPI = {
  getAll: (params?: { limit?: number }) => {
    const queryParams = new URLSearchParams();
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const query = queryParams.toString();
    return fetchAPI(`/tips${query ? `?${query}` : ''}`);
  },
  getById: (id: number) => fetchAPI(`/tips/${id}`),
};

// Categories API
export const categoriesAPI = {
  getAll: () => fetchAPI('/categories'),
  getById: (id: number) => fetchAPI(`/categories/${id}`),
};

// Products API
export const productsAPI = {
  getAll: () => fetchAPI('/products'),
  getById: (id: number) => fetchAPI(`/products/${id}`),
};

// Testimonials API
export const testimonialsAPI = {
  getAll: () => fetchAPI('/testimonials'),
  getById: (id: number) => fetchAPI(`/testimonials/${id}`),
};

// Subscribers API
export const subscribersAPI = {
  subscribe: (email: string) => 
    fetchAPI('/subscribers', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
  getCount: () => fetchAPI('/subscribers/count'),
};

// Contacts API
export const contactsAPI = {
  submit: (data: {
    first_name: string;
    last_name: string;
    email: string;
    subject: string;
    message: string;
  }) => 
    fetchAPI('/contacts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Gallery API
export const galleryAPI = {
  getAll: (params?: { category?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    
    const query = queryParams.toString();
    return fetchAPI(`/gallery${query ? `?${query}` : ''}`);
  },
  getById: (id: number) => fetchAPI(`/gallery/${id}`),
};

// Social Stats API
export const socialAPI = {
  getAll: () => fetchAPI('/social'),
  getByPlatform: (platform: string) => fetchAPI(`/social/${platform}`),
};

// Settings API
export const settingsAPI = {
  getAll: () => fetchAPI('/settings'),
  getByKey: (key: string) => fetchAPI(`/settings/${key}`),
};

// Health check
export const healthCheck = () => fetchAPI('/health');
