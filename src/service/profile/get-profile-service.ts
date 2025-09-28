import getProfileApi from '@/api/profile/get-profile';
import { profileSchema } from '@/types/user';

export const getProfileService = {
  fetch: async () => {
    const data = await getProfileApi();
    const parsed = profileSchema.parse(data);
    return parsed;
  },
};
