import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'productos',
        format: async (req, file) => file.mimetype.includes("image") ? "png" : "auto",
        public_id: (req, file) => {
            const [extName] = file.originalname.split(".").slice(-1);
            const finalName = `${uuid()}.${extName}`;
            return finalName;
        },
        resource_type: "auto",
    },
});

const upload = multer({ storage });

export default upload;