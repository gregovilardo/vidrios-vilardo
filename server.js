import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const whitelist = ["http://localhost:3000", "http://localhost:4000", "https://vidrios-vilardo.herokuapp.com"]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

const port = process.env.PORT || 4000;
//////////////////////////////MONGODB CONNECTION///////////////////////////////////////////
const uri = `mongodb+srv://user1:${process.env.ATLAS_USER_PW}@vidriosvilardodb.gju8c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("we are connected");
});
//////////////////////////////END MONGODB CONNECTION///////////////////////////////////////////

const formSchema = new mongoose.Schema({
    name: String,
    location: String,
    email: String,
    phone: String,
    message: String,
});

const Form = mongoose.model("Form", formSchema);

app.post("/contacto", (req, res) => {
    const { name, location, email, phone, message } = req.body;
    const form = new Form({
        name: name,
        location: location,
        email: email,
        phone: phone,
        message: message
    })
    form.save((err, forms) => {
        if (err) {
            console.log(err)
        }
        console.log("saved in db \n" + forms)
    })

});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
