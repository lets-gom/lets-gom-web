import axios from 'axios';

const BASE_URL = 'https://api.letsgom.com'; // 임시 URL

export const LetsGomBackend = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

LetsGomBackend.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

LetsGomBackend.interceptors.response.use(
  (response) => response,
  (error) => {
    // 세션 만료 Refresh Token 재발급 로직 추가
    console.error('API 요청 실패:', error);
    return Promise.reject(error);
  },
);
