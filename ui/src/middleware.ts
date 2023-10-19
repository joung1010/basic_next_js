import {NextRequest, NextResponse} from "next/server";

export function middleware(request:NextRequest) {
    console.log('미들웨어가 검사중..');
    if (request.nextUrl.pathname.startsWith('/products/1004')) {
        console.log('페이지 변경함~');
        return NextResponse.redirect(new URL('/products',request.url));
    }
}
export const config = {
    matcher: ['/products/:path*'],
}