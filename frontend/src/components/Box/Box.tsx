import * as C from "./styles";
import { InputFile } from "../";
import { useFileContext } from "../../hook/useFileContext";
import { request } from "../../services/api";
export default function Box() {
  const { file, fileUrl, setFileUrl } = useFileContext();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      console.log("Nenhum arquivo");
      return;
    }
    try {
      if (file) {
        const response = await request.endFile(file);
        setFileUrl(response.data.fileUrl);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <C.Box>
      <h1>Upload de arquivos</h1>
      <C.Form onSubmit={handleSubmit}>
        <InputFile />
        <C.Button type="submit">Enviar</C.Button>
      </C.Form>
      {fileUrl && (
        <a href={fileUrl} target="_blank" rel="noopener noreferrer">
          Url do arquivo
        </a>
      )}
    </C.Box>
  );
}
