const BASE_URL = 'https://api.letsgom.com'; // 임시 URL

export const LetsGomBackend = {
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${BASE_URL}${endpoint}`;
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API 요청 실패:', error);
      throw error;
    }
  },

  get(endpoint: string, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  },

  post(endpoint: string, data: Record<string, any>, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(endpoint: string, data: Record<string, any>, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(endpoint: string, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  },
};
