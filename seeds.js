const mongoose = require("mongoose");

const Inventory = require("./models/product");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/sportApp", {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("SUCCESS, CONNECTED TO SPORTS MONGO!");
  })
  .catch((err) => {
    console.log("CONNECTION ERROR!");
    console.log(err);
  });
/*
const sportProduct = [
  {
    name: "baseball bat",
    price: 2.00,
    category: "collect",
  },
  {
    name: "basketball jersey",
    price: 1.25,
    category: "clothes",
  },
  {
    name: "soccer jersey",
    price: 5.00,
    category: "clothes",
  },
  {
    name: "world cup card",
    price: 1.40,
    category: "cards",
  },
  {
    name: "world cup ball",
    price: 2.50,
    category: "collect",
  },
];

Inventory.insertMany(sportProduct)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
  */

const p = [
  {
    name: "Plate",
    price: 2.0,
    category: "collect",
  },
  {
    name: "soccer jersey",
    price: 2.0,
    category: "collect",
  },
  {
    name: "basketball jersey",
    price: 1.25,
    category: "clothes",
  },
  {
    name: "baseball bat",
    price: 5.0,
    category: "clothes",
  },
  {
    name:"world cup card",
    price: 3.00,
    category:"card"
  }
];

Inventory
  .insertMany(p)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

//console.log(Inventory)

/*
p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
  */
