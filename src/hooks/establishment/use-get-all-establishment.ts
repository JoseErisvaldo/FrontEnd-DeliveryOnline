import { getAllEstablishmentsService } from "@/service/establishment/get-all-establishments-service";
import { useEffect, useState } from "react";
import type { EstablishmentResponse } from "@/types/establishment";

export function useGetAllEstablishments() {
  const [establishments, setEstablishments] = useState<EstablishmentResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllEstablishmentsService.fetchAll()
      .then((data) =>
        setEstablishments(
          data.map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt),
            updatedAt: new Date(item.updatedAt),
          }))
        )
      )
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { establishments, loading, error };
}
