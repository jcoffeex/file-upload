import { createContext, SetStateAction, Dispatch, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

type ContextType = {
  file: File | null;
  fileUrl: string;
  setFile: Dispatch<SetStateAction<File | null>>;
  setFileUrl: Dispatch<SetStateAction<string>>;
};

export const Context = createContext({} as ContextType);

export default function Provider({ children }: ProviderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string>("");
  return (
    <Context.Provider value={{ file, fileUrl, setFile, setFileUrl }}>
      {children}
    </Context.Provider>
  );
}
