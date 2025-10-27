import { User } from "@/src/model/user";
import { createContext, useState } from "react";

type AppContextType = {
  theme: "light" | "dark";
  setTheme: () => void;
  authUser: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setToggle] = useState<"light" | "dark">("light");
  const [authUser, setAuthUser] = useState<User | null>(null);

  function setTheme() {
    setToggle(theme === "light" ? "dark" : "light");
  }

  function signIn(user: User) {
    setAuthUser(user);
  }

  function signOut() {
    setAuthUser(null);
  }

  return (
    <AppContext.Provider value={{ theme, setTheme, authUser, signIn, signOut }}>
      {children}
    </AppContext.Provider>
  );
}
