const express = require("express");
const bodyParser = require("body-parser");
const productController = require("./controllers/productController"); // Контроллер для товаров
const supplyController = require("./controllers/supplyController"); // Контроллер для поставок
const supplierController = require("./controllers/supplierController"); // Контроллер для поставщиков
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

// Middleware для парсинга JSON и URL-encoded запросов
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Роуты для товаров
app.get("/api/products", productController.getProducts); // Получение списка товаров
app.get("/api/products/filter", productController.filterProductsByPrice);  // Фильтрация товаров по цене
app.get("/api/products/sort", productController.sortProductsByPrice);     // Сортировка товаров по цене
app.get("/api/products/no-price-increase", productController.getProductsWithNoPriceIncrease); // Товары без повышения цен

// Роуты для поставок
app.get("/api/supplies/increase", supplyController.getSupplyIncrease); // Получение данных о поставках

// Роуты для поставщиков
app.get("/api/suppliers", supplierController.getSuppliers); // Получение списка поставщиков

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
