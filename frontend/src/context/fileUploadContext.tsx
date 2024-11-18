import { createContext, SetStateAction, Dispatch, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

type FileProps = {
  fileName: string;
  size: string;
  url: string;
};

type ContextType = {
  file: File | null;
  fileUrl: string;
  fileProps: FileProps;
  setFileProps: Dispatch<SetStateAction<FileProps>>;
  setFile: Dispatch<SetStateAction<File | null>>;
  setFileUrl: Dispatch<SetStateAction<string>>;
};

export const Context = createContext({} as ContextType);

export default function Provider({ children }: ProviderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string>("");

  const [fileProps, setFileProps] = useState<FileProps>({
    fileName: "",
    size: "",
    url: "",
  });
  return (
    <Context.Provider
      value={{ file, fileUrl, fileProps, setFileProps, setFile, setFileUrl }}
    >
      {children}
    </Context.Provider>
  );
}
