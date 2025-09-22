import { getAuthToken } from "@/lib/token";
import type { Establishment, EstablishmentCreateInput } from "@/types/establishment/post-establishment";

export async function createEstablishmentApi(payload: EstablishmentCreateInput): Promise<Establishment> {
  const token = getAuthToken();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/establishments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro na API (${response.status}): ${errorText}`);
    }

    return response.json();
  } catch (err: any) {
    if (err.name === "TypeError") {
      // Erros de rede, CORS ou backend desligado
      throw new Error("Erro de rede: não foi possível conectar ao servidor");
    }
    throw err;
  }
}