import { v2 as cloudinary } from "cloudinary";

// ADD PRODUCT
const addproducts = async (req, res) => {
  try {
    console.log("BODY =>", req.body);
    console.log("FILES =>", req.files);

    const {
      name,
      category,
      description,
      price,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);
    console.log("IMAGES ARRAY =>", images);


    // Upload to Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

  

    res.json({
      success: true,
      message: "Product added",
      images: imagesUrl,
    });
  } catch (error) {
    console.log("ERROR =>", error);
    res.json({ success: false, message: error.message });
  }
};

const listproducts = async (req, res) => {};
const removeproducts = async (req, res) => {};
const singleproducts = async (req, res) => {};

export { addproducts, listproducts, removeproducts, singleproducts };
