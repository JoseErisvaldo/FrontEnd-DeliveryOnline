import getUser from "@/api/get-profile";

export const UserService = {
  fetchProfile: async () => {
    return await getUser();
  },
};
