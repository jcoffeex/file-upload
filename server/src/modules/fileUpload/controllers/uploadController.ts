import { IncomingMessage, ServerResponse } from 'http';
import uploadFileService from '../services/uploadFileService';

export const uploadController = (req: IncomingMessage, res: ServerResponse) => {
  uploadFileService(req, res);
};