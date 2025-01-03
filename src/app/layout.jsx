import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

// component
import Header from "@/components/Header";
import Full_footer from "@/components/full_footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-open-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Nebulae || Acodez",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Full_footer />
      </body>
    </html>
  );
}
