import * as C from "./styles";
import imageUpload from "../../assets/images/upload.png";
import { useFileContext } from "../../hook/useFileContext";
export default function InputFile() {
  const { setFile, setCheckFile } = useFileContext();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setCheckFile(true);
    } else {
      setCheckFile(false);
    }
  };

  return (
    <C.Label>
      <img height={50} src={imageUpload} alt="Imagem de upload" />
      <C.InputFile type="file" onChange={handleFileChange} />
    </C.Label>
  );
}
