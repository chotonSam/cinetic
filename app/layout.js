import Navigation from "@/components/Navigation";
import AuthProvider from "@/providers/AuthProvider";
import { dbConnect } from "@/services/mongo";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CINETIC",
  description: "A movie database application",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <head>
        {/* Add the Google Font link for "Anton" */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <AuthProvider>
          <Navigation />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
