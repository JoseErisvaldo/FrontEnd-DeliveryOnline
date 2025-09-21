import getAllEstablishments from "@/api/establishment/get-all-establishments";
import { establishmentSchema } from "@/types/establishment";
import { z } from "zod";

export const getAllEstablishmentsService = {
  fetchAll: async () => {
    const data = await getAllEstablishments();
    const parsed = z.array(establishmentSchema).parse(data);
    return parsed;
  },
};
