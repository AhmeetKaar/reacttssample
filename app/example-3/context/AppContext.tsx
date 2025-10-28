import { User } from "@/src/model/user";
import { createContext, useContext, useState } from "react";
import { mockUsers } from "../mock/user_mock";

type AppContextType = {
  theme: "light" | "dark";
  setTheme: () => void;
  authUser: User | null;
  signIn: (user: Partial<User>) => boolean;
  signOut: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Error: useAppContext must be used within an AppProvider");
  }
  return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setToggle] = useState<"light" | "dark">("light");
  const [authUser, setAuthUser] = useState<User | null>(null);

  function setTheme() {
    setToggle(theme === "light" ? "dark" : "light");
  }

  function signIn(user: Partial<User>): boolean {
    const findUser = mockUsers.find(
      (u) =>
        u.email === user.email &&
        u.username === user.username &&
        u.phone === user.phone,
    );

    if (findUser) {
      setAuthUser(findUser);
      return true;
    } else {
      signOut();
      return false;
    }
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
