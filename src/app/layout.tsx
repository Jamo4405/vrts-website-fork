import type {Metadata} from "next";
import "./globals.css";
import CustomCursor from "./components/customCursor";
import LoadingScreen from "./components/LoadingScreen";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "VERITAS",
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
            <LoadingScreen>
                {children}
            </LoadingScreen>
        <CustomCursor/>
        </body>
        </html>
    );
}
