import express from "express";
import upload from "../middleware/multer.js";

import {
  addproducts,
  listproducts,
  removeproducts,
  singleproducts,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", upload.fields([{ name: "image1",maxcount:1 },{ name: "image2",maxcount:1 },{ name: "image3",maxcount:1 },{ name: "image4",maxcount:1 }]), addproducts);
productRouter.post("/list", listproducts);
productRouter.post("/remove", removeproducts);
productRouter.post("/single", singleproducts);

export default productRouter;
