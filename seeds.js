const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGOPEN OPEN OPEN");
  })
  .catch((err) => {
    console.log("oh no MONGO error");
    console.log(err);
  });

const p = new Product({
  name: "Ruby Grapefruit",
  price: 1.99,
  category: "fruit",
});
p.save()
  .then((m) => {
    console.log(m);
  })
  .catch((e) => {
    console.log(e);
  });

// const seedProducts = [
//   {
//     name: "Fairy Eggplant",
//     price: 1.0,
//     category: "vegetable",
//   },
//   {
//     name: "Organic Goddess Melon",
//     price: 4.99,
//     category: "fruit",
//   },
//   {
//     name: "Organic Mini Seedless Waterlon",
//     price: 3.99,
//     category: "fruit",
//   },
//   {
//     name: "Organic Celery",
//     price: 1.5,
//     category: "vegetable",
//   },
//   {
//     name: "Chocolate Whole Milk",
//     price: 2.69,
//     category: "dairy",
//   },
// ];

// Product.insertMany(seedProducts)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
