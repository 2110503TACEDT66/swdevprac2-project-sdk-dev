export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/booking/manage","/hotel","/account/:path*"],
};
