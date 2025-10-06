import { patchEstablishmentService } from '@/features/settings/establishment/services/patch-establishment-service';
import type { EstablishmentUpdateInput } from '@/features/settings/establishment/types/patch.establishment';
import type { Establishment } from '@/features/settings/establishment/types/post-establishment';
import { useMutation } from '@tanstack/react-query';

export function usePutEstablishment() {
  return useMutation<
    Establishment,
    Error,
    { id: string; data: EstablishmentUpdateInput }
  >({
    mutationFn: async ({ id, data }) => {
      const result = await patchEstablishmentService.update(id, data);

      return {
        ...result,
        createdAt: new Date(result.createdAt),
        updatedAt: new Date(result.updatedAt),
      };
    },
  });
}
