"use client";
import { SessionProvider } from "next-auth/react";
/**
 * 
 * @param children  - The child components that will have access to the session context provided by SessionProvider client side wise.
 * @returns The session provider components wrapping the child components
 */

export function Providers({children}: {children: React.ReactNode}){
    return <SessionProvider>{children}</SessionProvider>;
}