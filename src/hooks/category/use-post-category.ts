import { useMutation } from "@tanstack/react-query";
import { categoryService } from "@/service/category/post-category";
import type { postCategoryInput, PostCategoryResponse } from "@/types/category/post-category";

export function usePostCategory() {
  return useMutation<PostCategoryResponse, Error, postCategoryInput>({
    mutationFn: async (payload) => {
      const data = await categoryService.create(payload);
      return data;
    },
  });
}
