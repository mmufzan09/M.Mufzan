
import "../app/globals.css"
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Muhammad Mufzan | Web Developer",
  description: "Portfolio website of Muhammad Mufzan - Frontend Developer specialized in React & Next.js",
icons: {
    icon: "/mypic2.jpeg",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
