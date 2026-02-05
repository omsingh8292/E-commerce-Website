import { v2 as cloudinary } from "cloudinary";
const connectcloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
  });
};

export default connectcloudinary;
// this is that for all the devlopment
// the dat are kept under the survillance and all the data are monitorized by the sma session and allow all the text a
//forgetton through tits own entitiy