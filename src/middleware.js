import { NextResponse } from "next/server";

// export function middleware(request) {
//     return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//     matcher: '/about/ad'
// }

const user = {
    name: 'roy',
    role: 'user'
}

export function middleware(request) {

    let isAdminDashboardPage = request.nextUrl.pathname.includes('/admin-dashboard')
    let isAdmin = user.role === 'admin'
    console.log(isAdmin, isAdminDashboardPage);

    if (!isAdmin && isAdminDashboardPage) {
        console.log('ok');
        // return NextResponse.rewrite(new URL('/', request.url))
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
}