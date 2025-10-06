import { profileSchema } from '@/types/user';
import getProfile from '../api/get-profile';

export const getProfileService = {
  fetch: async () => {
    const data = await getProfile();
    const parsed = profileSchema.parse(data);
    return parsed;
  },
};
