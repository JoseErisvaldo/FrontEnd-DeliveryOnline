import { getAllEstablishmentsService } from '@/service/establishment/get-all-establishments-service';
import type { EstablishmentSchemaZod } from '@/types/establishment/get-establishment';
import { useEffect, useState, useCallback } from 'react';

export function useGetAllEstablishments() {
  const [establishments, setEstablishments] = useState<EstablishmentSchemaZod[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEstablishments = useCallback(() => {
    setLoading(true);
    setError(null);

    getAllEstablishmentsService
      .fetchAll()
      .then((data) =>
        setEstablishments(
          data.map((item) => ({
            ...item
          }))
        )
      )
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchEstablishments();
  }, [fetchEstablishments]);

  return { establishments, loading, error, refetch: fetchEstablishments };
}
