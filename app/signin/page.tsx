import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/submit-button";
import { Divider, LoadingOverlay } from "@mantine/core";
import Link from "next/link";

const Page = async ({
  searchParams,
}: {
  searchParams: { message: string };
}) => {
  const supabase = await createClient();
  const result = await supabase.auth.getUser();

  if (result.data.user !== null) {
    redirect("/");
  }
  const signIn = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/signin?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="my-6 text-4xl text-gray-500 dark:text-slate-200 font-semibold">
        Sign In
      </h1>
      <form className="animate-in flex flex-col justify-center gap-2 text-gray-600 bg-inherit rounded-xl h-full min-w-full sm:min-w-[500px] p-6 shadow-md  bg-white dark:bg-slate-600">
        <label
          className="text-md text-gray-500 dark:text-slate-200"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="rounded-md px-4 py-2  border mb-2 dark:bg-slate-600"
          name="email"
          placeholder="you@example.com"
          required
          autoCorrect="off"
        />
        <label
          className="text-md text-gray-500 dark:text-slate-200"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="rounded-md px-4 py-2  border mb-2 dark:bg-slate-600"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          autoCorrect="off"
        />

        <div className="flex flex-col gap-2 mt-4">
          <SubmitButton formAction={signIn}>Sign In</SubmitButton>
          <Divider my="xs" label="OR" labelPosition="center" />
          <Link
            className="border rounded-md px-4 py-2 text-center "
            href="/signup"
          >
            Sign Up
          </Link>
        </div>

        {searchParams?.message && (
          <p className="mt-2 p-4 text-secondary-500 text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
};
export default Page;
