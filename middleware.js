export { default } from "next-auth/middleware";

//Add paths to protect
export const config = { matcher: ["/dashboard"] };
