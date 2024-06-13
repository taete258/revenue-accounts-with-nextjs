import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
const AuthButton = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/signin");
  };
  return user ? (
    <div className="flex items-center gap-4">
      <p className="hidden sm:flex">Hey, {user.email}</p>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Sign out
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/signin"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Sign In
    </Link>
  );
};

export default React.memo(AuthButton);
