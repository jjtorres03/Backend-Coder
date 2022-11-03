const http = require("http");
const Manager = require("./manager.js");
const express = require("express");
const app = express();
const PORT = 8000;
const manager = new Manager("products.txt");

app.get("/", (req, res) => {
  const model = `
        <h1>Desafio Clase 3</h1>
        <h2>Juan Torres</h2>
    `;
  res.send(model);
});

app.get("/productos", async (req, res) => {
  const allProducts = await manager.getAll();
  res.send(allProducts);
});

app.get("/productoRandom", async (req, res) => {
  const allProducts = await manager.getAll();
  const productRandom = allProducts.message[Math.floor(Math.random() * allProducts.message.length)];
  res.send(productRandom);
});


const server = app.listen(PORT, () => {
  console.log(`>>>> Server started at http://localhost:${PORT}`);
});
