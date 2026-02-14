import express from "express";
import upload from "../middleware/multer.js";
import {
  addproducts,
  listproducts,
  removeproducts,
  singleproducts,
} from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addproducts
);

productRouter.post("/list", listproducts);
productRouter.post("/remove", removeproducts);
productRouter.post("/single", singleproducts);

export default productRouter;



// hello everyon et t is is the git control of the task that are asked by the me.