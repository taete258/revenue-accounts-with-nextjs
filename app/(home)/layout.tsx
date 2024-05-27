import { createClient } from "@/utils/supabase/server";

type LayoutProps = {
  authen: React.ReactNode;
  unAuthen: React.ReactNode;
};

export default async function Layout({ authen, unAuthen }: LayoutProps) {
  const superbase = createClient();
  const user = (await superbase.auth.getUser()).data.user;
  return (
    <main className="flex flex-col flex-1 justify-center items-center">
      {user ? authen : unAuthen}
    </main>
  );
}
