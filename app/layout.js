import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter, pesi 400 e 500: è il font del design system Nocturne (pagine nuove).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

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
  title: {
    default: "Mateusz Rodz",
    template: "%s | Mateusz Rodz",
  },
  description: "Sviluppo web e soluzioni digitali.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script
          defer
          src="https://umami.mateuszrodz.com/script.js"
          data-website-id="2fba60b2-a076-40a0-b472-1deec566efc2"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${astonpoliz.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
