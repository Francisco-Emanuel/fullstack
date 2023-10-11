import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs"
import { Poppins } from 'next/font/google'
import { dark } from "@clerk/themes";
import '../globals.css'

export const metadata: Metadata = {
    title: 'MinhaRede',
    description: 'Minha rede social',
}

const poppins = Poppins({
    subsets: ['latin'],
    weight: '500',
})

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang="pt-br">
                <body className={`${poppins.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}