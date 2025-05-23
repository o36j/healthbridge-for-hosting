// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const SERVER_URL = API_URL.replace('/api', '');

// Feature Flags
export const ENABLE_TELEHEALTH = true;
export const ENABLE_MESSAGING = true;
export const ENABLE_FILE_UPLOADS = true;

// File Upload Configuration
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

// Pagination Configuration
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 50;

// Cache Configuration
export const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Session Configuration
export const SESSION_TIMEOUT = 60 * 60 * 1000; // 1 hour

// Export all configurations
export default {
  API_URL,
  SERVER_URL,
  ENABLE_TELEHEALTH,
  ENABLE_MESSAGING,
  ENABLE_FILE_UPLOADS,
  MAX_FILE_SIZE,
  ALLOWED_FILE_TYPES,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  CACHE_DURATION,
  SESSION_TIMEOUT
}; 