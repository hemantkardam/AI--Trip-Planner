const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

app.post("/api/places", async (req, res) => {
  try {
    const response = await axios.post(
      "https://places.googleapis.com/v1/places:searchText",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.VITE_GOOGLE_PLACE_API_KEY,
          "X-Goog-FieldMask": [
            "places.photos",
            "places.displayName",
            "places.id",
          ],
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
app.get("/api/status", (req, res) => {
  res.send("Server is running");
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
