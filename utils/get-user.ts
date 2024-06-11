"use server";
import { createClient } from "./supabase/server";


export const  getUser= async () => {
  const supabase = createClient();

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      throw new Error(error.message);
    }

    return user
  } catch (error) {
    return error ;
  }
}