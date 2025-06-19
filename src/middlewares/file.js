import multer from 'multer';
import storage from '../services/cloudinaryConfig';

const upload = multer({ storage });

export default upload;