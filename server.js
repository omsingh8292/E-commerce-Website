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


// this thing is  not working at all and the description is to define the forecast of the region snd sll the task areassociated the reunion of the work
// the hings is to do nothing
