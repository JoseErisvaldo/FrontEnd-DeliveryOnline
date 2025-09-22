import { useMutation } from "@tanstack/react-query";
import { establishmentService } from "@/service/establishment/post-establishment-service";
import type { Establishment, EstablishmentCreateInput } from "@/types/establishment/post-establishment";

export function usePostEstablishment() {
  return useMutation<Establishment, Error, EstablishmentCreateInput>({
    mutationFn: async (payload) => {
      const result = await establishmentService.create(payload);

      return {
        ...result,
        createdAt: new Date(result.createdAt),
        updatedAt: new Date(result.updatedAt),
      };
    },
  });
}
