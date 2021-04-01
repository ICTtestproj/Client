export default function authorization (token: string) {
  
  return ({
  Authorization: `Bearer ${token}`
});}
