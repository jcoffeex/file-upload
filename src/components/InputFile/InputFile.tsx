import * as C from "./styles";
import imageUpload from "../../assets/images/upload.png";
export default function InputFile() {
  return (
    <C.Label>
      <img height={50} src={imageUpload} alt="Imagem de upload" />
      <C.InputFile type="file" />
    </C.Label>
  );
}
