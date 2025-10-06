import { useMutation } from '@tanstack/react-query';
import { postEstablishmentService } from '@/features/settings/establishment/services/post-establishment-service';
import type {
  Establishment,
  EstablishmentCreateInput,
} from '@/features/settings/establishment/types/post-establishment';

export function usePostEstablishment() {
  return useMutation<Establishment, Error, EstablishmentCreateInput>({
    mutationFn: async (payload) => {
      const result = await postEstablishmentService.create(payload);

      return {
        ...result,
        createdAt: new Date(result.createdAt),
        updatedAt: new Date(result.updatedAt),
      };
    },
  });
}
