import type {Metadata} from "next";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "VRTS | VERITAS",
  description: "Veritas is solving 3 problems: product authenticity, supply chain transparency, and brand experience all through a single solution: the Digital Product Passport.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <style>
        @import url(&#39;https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Barcode+39&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap&#39;);
      </style>
        <link rel="icon" href="icon.ico" />
      </head>
      <body>
        {children}
        </body>
        </html>
    );
}
