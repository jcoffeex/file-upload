import multer from 'multer';
import { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs/promises'; 
import path from 'path';
import  uploadFile  from './supabase.ts'; 

interface MulterRequest extends IncomingMessage {
  file?: Express.Multer.File;
}

const upload = multer({ dest: 'uploads/' });
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
      const filePath = path.resolve(file.path);
      const fileBuffer = await fs.readFile(filePath);

      const blob = new Blob([fileBuffer], { type: file.mimetype });

      const publicUrl = await uploadFile(bucketName, blob, file.filename);

      if (!publicUrl) {
        throw new Error('Erro ao gerar URL pública do arquivo');
      }

      res.statusCode = 200;
      res.end(JSON.stringify({
        message: 'Arquivo enviado com sucesso!',
        fileUrl: publicUrl,
      }));
      
    } catch (uploadError) {
      console.error(uploadError);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Erro ao processar o arquivo!' }));
    }
  });
};

export default uploadFileService;
