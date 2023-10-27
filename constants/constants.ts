export const SALT_COUNT = 10;
export const BASE_URL = 'http://localhost:3000/api';
export enum ApiUrls {
  BASE = 'http://localhost:3000/api',
  AUTHENTICATE = `${BASE}/authenticate`,
}

export enum RouteUrls {
  BASE = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  HOME = '/home',
}
