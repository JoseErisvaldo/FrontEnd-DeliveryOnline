import { z } from "zod";

export const postCategorySchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  userId: z.string().uuid("ID de usuário inválido"),
});

export type postCategoryInput = z.infer<typeof postCategorySchema>;

export const postCategoryResponseSchema = z.object({
  message: z.string(),
});

export type PostCategoryResponse = z.infer<typeof postCategoryResponseSchema>;
