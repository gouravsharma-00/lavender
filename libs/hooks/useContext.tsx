"use client";
import { createContext, useContext, useState } from "react";

interface UserContextType {
  userId: string | null;
  email: string | null;
  setUserId: (id: string | null) => void;
  setUserEmail: (email: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setUserEmail] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ userId, email, setUserId, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
