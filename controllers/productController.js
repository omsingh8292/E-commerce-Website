//function for add products
const addproducts = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      price,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    console.log(
      name,
      category,
      description,
      price,
      subCategory,
      sizes,
      bestseller,
    );
    console.log(image1, image2, image3, image4);

    res.json({});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list products

const listproducts = async (req, res) => {};

// ffunction for remove products

const removeproducts = async (req, res) => {};

//function for single product info

const singleproducts = async (req, res) => {};

export { addproducts, listproducts, removeproducts, singleproducts };
