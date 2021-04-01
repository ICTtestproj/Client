export default function authorization (token: string) {
  
  return ({
  Authorization: `Bearer ${token}`,
  "Cache-Control": "no-cache"
});}
