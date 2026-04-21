// middleware.js
import { auth } from "./app/services/authService";

// This tells Next.js to use the auth logic as the middleware
export default auth;

export const config = {// Use a matcher to define which routes require login

  // This regex protects everything EXCEPT /api, /_next/static, /_next/image, and favicon.ico
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}