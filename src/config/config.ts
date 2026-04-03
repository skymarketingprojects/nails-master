/**
 * Centralized configuration for the frontend.
 * Uses Vite's import.meta.env to access environment variables.
 */

export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/",
  BASE_URL: import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/",
  // Add other environment variables here as needed
};

export default config;
