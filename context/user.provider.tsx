import { createContext, ReactNode, useContext, useState } from "react";
import { UsersResponse } from "@/types";

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

const UserContext = createContext({
  user: null as UsersResponse | null,
  setUser: (_: UsersResponse | null) => {},
});
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UsersResponse | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
