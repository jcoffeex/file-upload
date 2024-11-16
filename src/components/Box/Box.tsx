import * as C from "./styles";
import { InputFile } from "../";
export default function Box() {
  return (
    <C.Box>
      <h1>Upload de arquivos</h1>
      <InputFile />
    </C.Box>
  );
}
