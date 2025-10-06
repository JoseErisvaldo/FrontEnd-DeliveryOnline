import { getAuthToken } from '@/lib/token';
import type { EstablishmentUpdateInput } from '@/features/settings/establishment/types/patch.establishment';
import type { Establishment } from '@/features/settings/establishment/types/post-establishment';

export async function updateEstablishmentApi(
  id: string,
  payload: EstablishmentUpdateInput
): Promise<Establishment> {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/establishments/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro na API (${response.status}): ${errorText}`);
    }

    return response.json();
  } catch (err: any) {
    if (err.name === 'TypeError') {
      throw new Error('Erro de rede: não foi possível conectar ao servidor');
    }
    throw err;
  }
}
