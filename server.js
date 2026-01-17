import express from "express";
import cors from "cors";
import "dotenv/config";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

//API endpoints

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port,()=>console.log('Server started on PORT:'+port));

// the thing is to define the all the tet



// deploy  all the wrok and allow all theri context in he file and acknowledge heri perfection an allow all the task and their data is to allow the tassk for its future