import * as C from "./styles";
import { InputFile, File } from "../";
import { useFileContext } from "../../hook/useFileContext";
import { request } from "../../services/api";
import { Loading } from "../";
export default function Box() {
  const { file, fileProps, setFileProps, checkFile, loading, setLoading } =
    useFileContext();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      console.log("Nenhum arquivo");
      return;
    }
    try {
      if (file) {
        setLoading(true);
        const response = await request.endFile(file);
        setFileProps((prevState) => ({
          ...prevState,
          fileName: response.data.fileName,
          size: response.data.fileSize,
          url: response.data.fileUrl,
          fileType: response.data.fileType,
        }));
        setLoading(false);
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
        <C.Button isActive={checkFile} type="submit">
          Enviar
        </C.Button>
      </C.Form>
      {fileProps.fileName && fileProps.size && fileProps.url && <File />}
      {loading && <Loading />}
    </C.Box>
  );
}
