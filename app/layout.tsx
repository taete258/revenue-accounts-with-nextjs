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
        <main className="min-h-screen flex flex-col items-center w-full bg-sky-200 dark:bg-slate-700 z-20">
          <UserSessionProvider>
            <MantineProvider>
              <Header />
              <div className=" w-full h-full pt-16 pb-14">{children}</div>
              <Footer />
            </MantineProvider>
          </UserSessionProvider>
        </main>
      </body>
    </html>
  );
}
