import { postCategorySchema, type postCategoryInput, type PostCategoryResponse } from "@/types/category/post-category";
import { postCategory } from "@/api/category/post-category";

export const categoryService = {
  create: async (payload: postCategoryInput): Promise<PostCategoryResponse> => {
    const validatedPayload: postCategoryInput = postCategorySchema.parse(payload);
    return await postCategory(validatedPayload);
  },
};
