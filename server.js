import express, { urlencoded } from "express";
import mailchimp from "@mailchimp/mailchimp_marketing";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// MAILCHIMP CONNECTION
mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: "us6",
});

async function callPing() {
    const response = await mailchimp.ping.get();
    console.log(response);
}

callPing();

app.post("/contacto", (req, res) => {
    const { name, location, email, phone, message } = req.body;

    let data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    NAME: name,
                    ADDRESS: location,
                    PHONE: phone,
                    MESSAGE: message,
                },
            },
        ],
    };

    var jsonData = JSON.stringify(data);

    const run = async () => {
        try {
            const response = await mailchimp.lists.batchListMembers(
                process.env.AUDIENCE_ID,
                jsonData
            );
            console.log(response.new_members[0].status);
        } catch (err) {
            console.log(err);
        }
    };

    run();

    // res.status(201).json({"response": "server post loaded"})
});

app.get("/express_backend", (req, res) => {
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
