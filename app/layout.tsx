import { GeistSans } from "geist/font/sans";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "./../components/Header";
import "@mantine/charts/styles.css";
import Footer from "@/components/Footer";
import { UserSessionProvider } from "@/shared/stores/useUserSession";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Revenue-Accounts",
  description: "Create with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <UserSessionProvider>
          <MantineProvider>
            <div className="relative flex flex-col min-h-dvh bg-sky-200 dark:bg-slate-700 z-20">
              <Header />
              {children}
              <Footer />
            </div>
          </MantineProvider>
        </UserSessionProvider>
      </body>
    </html>
  );
}
