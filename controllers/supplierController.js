const db = require("../database");

const supplierController = {
  // Получение списка поставщиков
  getSuppliers: async (req, res) => {
    try {
      const [suppliers] = await db`SELECT * FROM "suppliers"`;
      res.json(suppliers);
    } catch (error) {
      console.error("Ошибка при получении поставщиков:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  },
};

module.exports = supplierController;
