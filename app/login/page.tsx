import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./components/submit-button";

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
    const data = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);

    if (data.error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="relative flex flex-1 justify-center items-center px-8 ">
      <form className="animate-in flex flex-col justify-center gap-2 text-gray-600  bg-inherit rounded-xl min-w-full sm:min-w-[500px] p-6 shadow-md mt-[10%] bg-white dark:bg-slate-600">
        <label className="text-md dark:text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2  border mb-6 dark:bg-slate-600"
          name="email"
          placeholder="you@example.com"
          required
          autoCorrect="off"
        />
        <label className="text-md dark:text-slate-200" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2  border mb-6 dark:bg-slate-600"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          autoCorrect="off"
        />

        <div className="flex flex-col gap-2">
          <SubmitButton
            formAction={signIn}
            className="bg-primary rounded-md px-4 py-2 text-white"
            pendingText="Signing In..."
          >
            Sign In
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            className="border border-gray-300 rounded-md px-4 py-2 dark:text-white mb-2"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
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
