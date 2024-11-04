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
const astonpoliz = localFont({
  src: "./fonts/ASTONPOLIZ.otf",
  variable: "--font-astonpoliz",
});

export const metadata = {
  title: "Mateusz Rodz",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${astonpoliz.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
