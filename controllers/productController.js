const sql = require("../database");

const productController = {
  // Получение списка товаров
  getProducts: async (req, res) => {
    try {
      const products = await sql`SELECT * FROM "products"`;  // Directly using `sql` for querying
      res.json(products);
    } catch (error) {
      console.error("Ошибка при получении товаров:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  },

  // Фильтрация товаров по цене
  filterProductsByPrice: async (req, res) => {
    try {
      const { minPrice, maxPrice } = req.query;

      const products = await sql` SELECT * FROM "products" 
        WHERE price BETWEEN ${minPrice} AND ${maxPrice}`;  // Using `sql` for querying

      res.json(products);
    } catch (error) {
      console.error("Ошибка при фильтрации товаров:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  },

  // Сортировка товаров по цене
  sortProductsByPrice: async (req, res) => {
    try {
      const { order } = req.query; // 'asc' или 'desc'

      const products = await sql`SELECT * FROM "products" 
        ORDER BY price ${order === 'asc' ? 'ASC' : 'DESC'}`;  // Using `sql` for querying

      res.json(products);
    } catch (error) {
      console.error("Ошибка при сортировке товаров:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  },

  // Товары, цены на которые не повышались
  getProductsWithNoPriceIncrease: async (req, res) => {
    try {
    const products = await sql`SELECT * FROM "products"`


      res.json(products);
    } catch (error) {
      console.error("Ошибка при получении товаров без повышения цен:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  },
};


module.exports = productController;
