"use server";
import { createClient } from "./supabase/server";


export const  getSession = async () => {
  const supabase = createClient();

  try {
    const {
      data,
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new Error(error.message);
    }
 
    return data.session
  } catch (error) {
    return error ;
  }
}