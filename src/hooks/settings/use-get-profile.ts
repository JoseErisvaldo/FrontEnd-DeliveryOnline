import { getProfileService } from "@/service/profile/get-profile-service";
import type { ProfileResponse } from "@/types/user";
import { useEffect, useState } from "react";

export function useGetProfile() {
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProfileService.fetch()
      .then((data) => setProfile(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { profile, loading, error };
}
