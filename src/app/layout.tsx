import type {Metadata} from "next";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "VRTS - Veritas",
    description: "Veritas is solving 3 problems: product authenticity, supply chain transparency, and brand experience all through a single solution: the Digital Product Passport.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
