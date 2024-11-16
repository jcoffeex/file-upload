import { IncomingMessage, ServerResponse } from 'http';
import { uploadController } from '../controllers/uploadController';
export const uploadRoute = (req: IncomingMessage, res: ServerResponse) => {
    if(req.method === 'POST' && req.url === '/upload'){
        res.statusCode = 200;
        uploadController(req, res);
        console.log('req post')
    };
};

export const filesRoute = (req: IncomingMessage, res: ServerResponse) => {
    if(req.method === 'GET' && req.url === '/files'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'Text/Plain');
        res.end('Rota Files');
    }
}