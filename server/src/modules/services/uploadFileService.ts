import multer from 'multer';
import { IncomingMessage, ServerResponse } from 'http';
import uploadFile from './supabase.'; 

interface MulterRequest extends IncomingMessage {
  file?: Express.Multer.File;
}

const upload = multer();

const handleUpload: any = upload.single('file');

const bucketName = 'file'; 

const uploadFileService = async (req: MulterRequest, res: ServerResponse) => {
  handleUpload(req, res, async (err: any) => {
    if (err) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Erro no upload do arquivo' }));
    }

    const file = req.file;
    
    if (!file) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'Nenhum arquivo enviado!' }));
    }

    try {

      const publicUrl = await uploadFile(bucketName, file.buffer, file.originalname);
      const fileName = file.originalname;
      const fileSize = file.size;
      const fileType = file.mimetype;
      if (!publicUrl) {
        throw new Error('Erro ao gerar URL pública do arquivo');
      }

      res.statusCode = 201;
      res.end(JSON.stringify({
        message: 'Arquivo enviado com sucesso!',
        fileName: fileName,
        fileSize: fileSize,
        fileUrl: publicUrl,
        fileType: fileType,
      }));
      
    } catch (uploadError) {
      console.error(uploadError);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Erro ao processar o arquivo!' }));
    }
  });
};

export default uploadFileService;
