import { useMutation } from '@tanstack/react-query';
import type {
  postCategoryInput,
  PostCategoryResponse,
} from '../types/post-category';
import { postCategoryService } from '../services/post-category-service';

export function usePostCategory() {
  return useMutation<PostCategoryResponse, Error, postCategoryInput>({
    mutationFn: async (payload) => {
      const data = await postCategoryService.create(payload);
      return data;
    },
  });
}
