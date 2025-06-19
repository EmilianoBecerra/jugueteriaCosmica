import multer from 'multer';
import { v4 as uuid } from 'uuid'
import path from 'node:path';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.includes('image')) {

            cb(null, path.join(process.cwd(), "public", "img", "productos"))
        }
        else {
            cb(null, path.join(process.cwd(), "public", "img", "other"))
        }
    },

    filename: (req, file, cb) => {
        const [extName] = file.originalname.split(".").slice(-1)
        const finalName = `${uuid()}.${extName}`
        cb(null, finalName)
    }
})


export const upload = multer({ storage: storage })