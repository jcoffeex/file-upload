import { createContext, SetStateAction, Dispatch, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

type ContextType = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
};

export const Context = createContext({} as ContextType);

export default function Provider({ children }: ProviderProps) {
  const [file, setFile] = useState<File | null>(null);
  return (
    <Context.Provider value={{ file, setFile }}>{children}</Context.Provider>
  );
}
