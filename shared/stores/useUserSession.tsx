"use client";
import { createClient } from "@/utils/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the shape of the user data and session data

// Define the context state
interface UserSessionContextState {
  user: User | null;
  session: Session | null;
}

// Create a context with a default value
const UserSessionContext = createContext<UserSessionContextState | undefined>(
  undefined
);

// Define a provider component for the context
interface UserSessionProviderProps {
  children: ReactNode;
}

export const UserSessionProvider: React.FC<UserSessionProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const supabase = () => createClient();

  useEffect(() => {
    async () => {
      const {
        data: { user },
      } = await supabase().auth.getUser();
    };

    Promise.all([supabase().auth.getUser(), supabase().auth.getSession()]).then(
      (result) => {
        result[0].data.user && setUser(result[0].data.user);
        result[1].data.session && setSession(result[1].data.session);
      }
    );
  }, []);

  if (!user && !session) {
    return;
  }
  return (
    <UserSessionContext.Provider value={{ user, session }}>
      {children}
    </UserSessionContext.Provider>
  );
};

// Custom hook to use the user session context
export const useUserSession = (): UserSessionContextState => {
  const context = useContext(UserSessionContext);
  if (context === undefined) {
    throw new Error("useUserSession must be used within a UserSessionProvider");
  }
  return context;
};
