require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

app.use(
    cors({
        origin : [
          "http://localhost:5173",
          "http://localhost:5174",
          "https://stocker-frontend-52un.onrender.com",
          "https://stocker-dashboard-w1it.onrender.com",
        ],
        credentials : true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });

  newOrder.save();

  res.send('Order saved!');
})

const dns = require('dns');
dns.setServers(['1.1.1.1', '0.0.0.0']);

mongoose
  .connect(url)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(8080, () => {
  console.log("App is listening on port '8080'");
})
