import { useContext } from "react";
import { Context } from "../context/fileUploadContext";

export const useFileContext = () => {
    return useContext(Context);
};

