//method one
// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/user', request.url));
// }

//methos two
// import middleware from "next-auth/middleware";
// export default middleware;

export {default} from "next-auth/middleware";


export const config = {
  //* : zero or more
  //+ : one or more
  //? : zero or one
  matcher: ['/admin/:path*'],
};
