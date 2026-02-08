import { v2 as cloudinary } from "cloudinary";
const connectcloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
  });
};

export default connectcloudinary;
// thedat are driven throough the text cover throughthe line and cancel via all the text nd llow all the data towardsthe sam e line


// hello everyone myself om singh and i'm fronn the star city thatarecontinue through the all data re kept under the all continue section