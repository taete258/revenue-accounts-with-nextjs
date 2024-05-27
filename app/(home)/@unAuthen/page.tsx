import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import React from "react";

const Page = async () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center p-8">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3 bg-red-200">
        <h2 className="font-bold text-4xl mb-4">UnAuthen Page</h2>
        <FetchDataSteps />
      </div>
    </div>
  );
};

export default Page;
