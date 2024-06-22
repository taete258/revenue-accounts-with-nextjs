import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/submit-button";
import { PiWarningCircleFill } from "react-icons/pi";
import Link from "next/link";
const Page = async ({
  searchParams: { message, error, error_code, error_description },
}: {
  searchParams: {
    message: string;
    error: string;
    error_code: string;
    error_description: string;
  };
}) => {
  const supabase = await createClient();
  const result = await supabase.auth.getUser();

  if (result.data.user !== null) {
    redirect("/");
  }

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
      return redirect("/signin?message=Could not authenticate user");
    }

    return redirect("/signin?message=Check email to continue sign in process");
  };

  return error_code !== "403" ? (
    <div className="relative flex flex-1 flex-col justify-center items-center px-8 ">
      <h1 className="my-6 text-4xl text-gray-500 dark:text-slate-200 font-semibold">
        Sign Up
      </h1>
      <form className="animate-in flex flex-col justify-center gap-2 text-gray-600  rounded-xl min-w-full sm:min-w-[500px] p-6 shadow-md bg-white dark:bg-slate-600">
        <label
          className="text-md text-gray-500 dark:text-slate-200"
          htmlFor="first-name"
        >
          First Name
        </label>
        <input
          className="rounded-md px-4 py-2  border mb-2 dark:bg-slate-600"
          type="text"
          name="first-name"
          required
          autoCorrect="off"
        />
        <label
          className="text-md text-gray-500 dark:text-slate-200"
          htmlFor="last-name"
        >
          Last Name
        </label>
        <input
          className="rounded-md px-4 py-2  border mb-2 dark:bg-slate-600"
          type="text"
          name="last-name"
          required
          autoCorrect="off"
        />

        <div className="flex flex-col gap-2 mt-4">
          <SubmitButton color="primary" formAction={signUp}>
            Sign Up
          </SubmitButton>
        </div>

        {message && (
          <p className="mt-2 p-4 text-secondary-500 text-center">{message}</p>
        )}
      </form>
    </div>
  ) : (
    <div className="relative flex flex-1 flex-col justify-center items-center px-8 ">
      <PiWarningCircleFill size={100} className="text-red-500" />
      <h1 className="my-6 text-red-500 text-4xl dark:text-slate-200 font-semibold">
        Error : {error} ({error_code})
      </h1>
      <h1 className="text-2xl text-gray-700">{error_description}</h1>
      <Link
        href={"/"}
        className=" bg-white rounded-md w-72 px-6 py-2 text-center text-xl text-gray-00  hover:bg-primary hover:text-white my-8"
        replace
      >
        Go to homepage
      </Link>
    </div>
  );
};
export default Page;
