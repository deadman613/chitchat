import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_KEY_SECRETE,
});

export default cloudinary;