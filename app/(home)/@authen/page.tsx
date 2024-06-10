import { createClient } from "@/utils/supabase/server";
import ChartSection from "./components/chart-section";
import { axiosGet } from "@/utils/axios-method/axios-method";

const Page = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const user = data.user;

  const res = await axiosGet({ endPoint: `/users/getUserById/${user?.id}` });
  return (
    <div className="flex-1 w-full flex flex-col gap-4 p-8 max-w-5xl">
      <h2 className="font-bold text-4xl">Dashboards</h2>
      <ChartSection />
      <p>{JSON.stringify(res)}</p>
      <div className="bg-red-400 w-full h-20"></div>
    </div>
  );
};

export default Page;
