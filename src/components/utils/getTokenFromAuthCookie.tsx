import { cookies } from "next/headers";

export async function getTokenFromAuthCookie() {
  const cookieStore = await cookies(); // ✅ this works only in server components or server functions
  const cookie = cookieStore.get("auth"); // or whatever your cookie name is

  const authCookie = cookie ? JSON.parse(cookie.value) : null;
  const token = authCookie?.token;

  return token;
}
