import http from 'http';
import { uploadRoute } from './modules/routes';
import cors from 'cors';
const port = 3000;
const server = http.createServer((req, res) => {
  const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'], 
  };

  cors(corsOptions)(req, res, () => {
    if (req.url === '/upload') {
      uploadRoute(req, res);
    } else {
      res.statusCode = 404;
      res.end('Rota não encontrada');
    }
  });
});

server.listen(port);