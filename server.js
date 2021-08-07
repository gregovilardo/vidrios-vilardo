import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

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

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
