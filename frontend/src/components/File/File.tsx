import * as C from "./styles";
import fileIcon from "../../assets/icons/file.png";
import { useFileContext } from "../../hook/useFileContext";

export default function File() {
  const { fileProps } = useFileContext();
  return (
    <C.File>
      <div style={{ display: "flex" }}>
        <img src={fileIcon} height={30} width={30} />
        <div style={{ lineHeight: 1.2, marginLeft: 8 }}>
          <span>{fileProps.fileName}</span>
          <span style={{ display: "block" }}>{fileProps.size}</span>
        </div>
      </div>
      <C.Button>Visualizar</C.Button>
    </C.File>
  );
}