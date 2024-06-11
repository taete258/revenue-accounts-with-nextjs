import ChartSection from "./components/ChartSection";
import { getUser } from "@/utils/get-user";
import { getSession } from "@/utils/get-session";

const Page = async () => {
  const user = await getUser();
  const data = await getSession();

  return (
    <div className="flex-1 w-full flex flex-col gap-4 p-8 max-w-5xl">
      <h2 className="font-bold text-4xl">Dashboards</h2>

      <ChartSection />

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <div className="bg-red-400 w-full h-20"></div>
    </div>
  );
};

export default Page;
