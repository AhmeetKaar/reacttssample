import { User } from "@/src/model/user";
import { createContext, useContext, useState } from "react";
import { mockUsers } from "../mock/user_mock";
import loc from "../../localization/localization";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

type AppContextType = {
  theme: Theme;
  setTheme: () => void;
  authUser: User | null;
  signIn: (user: Partial<User>) => boolean;
  signOut: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(loc.t("useAppContextError"));
  }
  return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setToggle] = useState<Theme>(Theme.Light);
  const [authUser, setAuthUser] = useState<User | null>(null);

  function setTheme() {
    setToggle(theme === Theme.Light ? Theme.Dark : Theme.Light);
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
