import type {Metadata} from "next";
import "./globals.css";
import CustomCursor from "./components/customCursor";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "VRTS | VERITAS",
    description:
        "Veritas is solving 3 problems: product authenticity, supply chain transparency, and brand experience all through a single solution: the Digital Product Passport.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="icon.ico"/>
        </head>
        <body>
        {children}
        <CustomCursor/>
        </body>
        </html>
    );
}
