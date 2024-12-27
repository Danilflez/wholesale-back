const sql = require("../database");

const supplyController = {
  // Получение данных о поставках товара в 2023 году
  getSupplyIncrease: async (req, res) => {
    try {
      const { productId } = req.query;

      const supplyData = await sql`SELECT product_id, 
               SUM(quantity) AS total_quantity_2023
        FROM "deliveries"
        WHERE product_id = ${productId} AND EXTRACT(YEAR FROM delivery_date) = 2023
        GROUP BY product_id`;  // Execute query using sql
  
      res.json(supplyData);
    } catch (error) {
      console.error("Ошибка при получении данных о поставках:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  },
};

module.exports = supplyController;
