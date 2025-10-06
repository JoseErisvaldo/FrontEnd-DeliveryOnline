import { getAuthToken } from '@/lib/token';
import type { postCategoryInput } from '../types/post-category';

export async function postCategory(payload: postCategoryInput) {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `${import.meta.env.VITE_PRODUCER_URL}/categorys`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to create category');
    }

    return response.json();
  } catch (error: any) {
    if (error.name === 'TypeError') {
      throw new Error('Erro de rede: não foi possível conectar ao servidor');
    }
  }
}
