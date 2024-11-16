import * as C from "./styles";
import { InputFile } from "../";
import { useFileContext } from "../../hook/useFileContext";
import { request } from "../../services/api";
export default function Box() {
  const { file } = useFileContext();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    alert("hle");
    if (!file) {
      console.log("Nenhum arquivo");
      return;
    }
    try {
      if (file) {
        const response = await request.endFile(file);
        console.log("Resposta do servidor:", response.data);
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
        <button type="submit">Enviar</button>
      </C.Form>
    </C.Box>
  );
}
