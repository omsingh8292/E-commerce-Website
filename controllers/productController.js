import productmodel from "../models/productmodel.js";
import cloudinary from "cloudinary";




// ADD PRODUCT
export const addproducts = async (req, res) => {
  try {
    console.log("BODY =>", req.body);
    console.log("FILES =>", req.files);

    const { name, category, description, price, subcategory, sizes, bestseller } = req.body;

    // Grab uploaded files
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);
    console.log("IMAGES ARRAY =>", images.map(img => img.path));

    // Upload to Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subcategory,
      bestseller: bestseller === "true",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productmodel(productData);
    await product.save();

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

// LIST PRODUCTS
export const listproducts = async (req, res) => {
  try {
    const products = await productmodel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// REMOVE PRODUCT
export const removeproducts = async (req, res) => {
  try {
    const { id } = req.params;
    await productmodel.findByIdAndDelete(id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// SINGLE PRODUCT
export const singleproducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productmodel.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default { addproducts, listproducts, removeproducts, singleproducts };
