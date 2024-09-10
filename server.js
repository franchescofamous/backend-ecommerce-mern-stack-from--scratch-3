//importer Express
const express = require("express");
const cors = require("cors");
const menRoute = require("./routes/menRoute");
const womenRoute = require("./routes/womenRoute");

//creer une application express
const app = express();

//Convertir les requetes pour les exploité
app.use(express.json());
app.use(cors());

app.use("/men", menRoute);
app.use("/women", womenRoute);
//

//ecouter un Port avec l'application express
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
