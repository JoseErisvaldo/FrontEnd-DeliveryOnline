import { getAuthToken } from "@/lib/token";
import type { EstablishmentResponse } from "@/types/establishment";

export default async function getAllEstablishments(): Promise<EstablishmentResponse[]> { 
    const token = getAuthToken()
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/establishments`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            credentials: "include",
        }
    );
    if (!response.ok) {
        throw new Error("Failed to fetch establishments");
    }
    return await response.json();
}