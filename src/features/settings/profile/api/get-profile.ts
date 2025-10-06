import { getAuthToken } from '@/lib/token';
import type { ProfileResponse } from '@/types/user';

export default async function getProfile(): Promise<ProfileResponse> {
  const token = getAuthToken();

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/profile`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    }
  );

  if (!response.ok) {
    throw new Error('Falha ao buscar perfil do usuário');
  }

  return await response.json();
}
