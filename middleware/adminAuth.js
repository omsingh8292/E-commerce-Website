import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;   

    if (!token) {
      return res.json({ success: false, message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    if (decoded.role !== "admin") {
      return res.json({ success: false, message: "Not authorized admin" });
    }

    next();
  } 
  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
