import multer from 'multer';
import { IncomingMessage, ServerResponse } from 'http';

interface MulterRequest extends IncomingMessage {
  file?: Express.Multer.File;  
}

const upload = multer({ dest: 'uploads/' });  
const handleUpload: any = upload.single('file'); 

const uploadFileService = (req: MulterRequest, res: ServerResponse) => {
  handleUpload(req, res, (err: any) => { 
    if (err) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Erro no upload do arquivo' }));
    }

    const file = req.file; 
    if (!file) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'Nenhum arquivo enviado!' }));
    }

    console.log('Arquivo enviado:', file.filename);  
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Arquivo enviado com sucesso!', file: file.filename }));
  });
};

export default uploadFileService ;
