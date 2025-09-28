export function getAuthToken(): string {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error('No auth token found');
  return token;
}
