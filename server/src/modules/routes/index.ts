import { IncomingMessage, ServerResponse } from 'http';
import { uploadController } from '../controllers/uploadController';
export const uploadRoute = (req: IncomingMessage, res: ServerResponse) => {
    if(req.method === 'POST' && req.url === '/upload'){
        res.statusCode = 200;
        uploadController(req, res);
        console.log('req post')
    };
};

