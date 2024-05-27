import { createClient } from "@/utils/supabase/server";
import ChartSection from "./components/ChartSection";

const Page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-4 p-8 max-w-5xl">
      <h2 className="font-bold text-4xl">Dashboards</h2>

      <ChartSection />

      <div className="bg-red-400 w-full h-20"></div>
    </div>
  );
};

export default Page;
