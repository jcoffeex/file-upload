import { createContext, SetStateAction, Dispatch, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

type FileProps = {
  fileName: string;
  size: string;
  url: string;
  fileType: string;
};

type ContextType = {
  file: File | null;
  fileProps: FileProps;
  checkFile: boolean;
  modal: boolean;
  loading: boolean;
  handleModal: () => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setModal: Dispatch<SetStateAction<boolean>>;
  setCheckFile: Dispatch<SetStateAction<boolean>>;
  setFileProps: Dispatch<SetStateAction<FileProps>>;
  setFile: Dispatch<SetStateAction<File | null>>;
};

export const Context = createContext({} as ContextType);

export default function Provider({ children }: ProviderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [modal, setModal] = useState(false);
  const [checkFile, setCheckFile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileProps, setFileProps] = useState<FileProps>({
    fileName: "",
    size: "",
    url: "",
    fileType: "",
  });
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Context.Provider
      value={{
        file,
        fileProps,
        modal,
        checkFile,
        loading,
        handleModal,
        setModal,
        setFileProps,
        setFile,
        setCheckFile,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
