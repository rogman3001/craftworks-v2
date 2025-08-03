
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { applyRules } = require("./temp_ruleengine/engine/applyRules");

require("dotenv").config();

const app = express();
const PORT = 3000;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(bodyParser.json());

app.post("/bewerten", (req, res) => {
  const apiKey = req.header("x-api-key");
  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: "Ungültiger API-Key" });
  }

  const { offer_id } = req.body;

  // Beispielangebot
  const fakeOffer = {
    id: offer_id,
    positions: [
      { type: "maler", price: 1000 },
      { type: "boden", price: 1800 }
    ]
  };

  try {
    const result = applyRules(fakeOffer);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Interner Fehler", details: err.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API läuft auf http://0.0.0.0:${PORT}`);
});
