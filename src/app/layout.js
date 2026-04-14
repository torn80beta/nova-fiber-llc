import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "NovaFiber LLC",
  description: "Professional upholstery and carpet cleaning service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-green-400">
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
