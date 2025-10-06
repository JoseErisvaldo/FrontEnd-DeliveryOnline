import { postCategory } from '../api/post-category';
import {
  postCategorySchema,
  type postCategoryInput,
  type PostCategoryResponse,
} from '../types/post-category';

export const postCategoryService = {
  create: async (payload: postCategoryInput): Promise<PostCategoryResponse> => {
    const validatedPayload: postCategoryInput =
      postCategorySchema.parse(payload);
    return await postCategory(validatedPayload);
  },
};
