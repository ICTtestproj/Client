export const authorization = (token: string) => ({
  Authorization: `Bearer ${token}`,
  "Cache-Control": "no-cache"
});
