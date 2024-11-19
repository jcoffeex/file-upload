import * as C from "./styles";
import { useFileContext } from "../../hook/useFileContext";
import closeIcon from "../../assets/icons/close.png";

export default function Modal() {
  const { fileProps, handleModal } = useFileContext();
  const mimeType = fileProps.fileType;

  const handleDownload = async () => {
    const fileUrl = fileProps.url;

    try {
      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error("Falha ao baixar o arquivo.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileProps.fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Erro ao baixar o arquivo:", error);
    }
  };

  const renderFileContent = () => {
    if (mimeType.startsWith("image/")) {
      return (
        <img
          style={{ borderRadius: 12 }}
          width="200px"
          height="200px"
          src={fileProps.url}
          alt="Arquivo de imagem"
        />
      );
    } else if (mimeType.startsWith("video/")) {
      return <video width="100%" height="50%" controls src={fileProps.url} />;
    } else if (mimeType === "application/pdf") {
      return (
        <embed
          src={fileProps.url}
          type="application/pdf"
          width="100%"
          height="50%"
        />
      );
    } else {
      return (
        <a href={fileProps.url} target="_blank" rel="noopener noreferrer">
          Url para visualizar o conteúdo
        </a>
      );
    }
  };
  return (
    <C.Modal>
      <C.Content>
        <img
          style={{
            cursor: "pointer",
            position: "absolute",
            top: 12,
            right: 12,
          }}
          onClick={handleModal}
          src={closeIcon}
          alt="Close icon"
          height={40}
          width={40}
        />
        <h2 style={{ marginBottom: 12 }}>Conteúdo do arquivo:</h2>
        <div> {renderFileContent()}</div>
        <C.Button onClick={handleDownload}>Donwload</C.Button>
      </C.Content>
    </C.Modal>
  );
}
