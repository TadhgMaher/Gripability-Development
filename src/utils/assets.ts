// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For gripability.com deployment, use root path
  return `/${cleanPath}`;
};
