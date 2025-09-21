// src/api/getUser.ts
export default async function getUser() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No auth token found");
  }
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  const data = await response.json();
  return data;
}