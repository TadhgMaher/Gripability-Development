// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), use the base path
  if (import.meta.env.PROD) {
    return `/Gripability-Development/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
};
