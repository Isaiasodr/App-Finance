const Revenues = require("../models/revenues");

module.exports = class RevenuesController {
  static async create(req, res) {
    const { origin, amount } = req.body;

    if (!origin) {
      res.status(422).json({ message: "a origem da receita é obrigatória" });
      return;
    }
    if (!amount) {
      res.status(422).json({ message: "o valor recebido é obrigatório" });
      return;
    }

    const renevue = new Revenues({
      origin,
      amount,
    });
    try {
      const newRevenue = await renevue.save();
      res
        .status(201)
        .json({ message: "Receita cadastrada com sucesso!", newRevenue });
    } catch (error) {
      res.status(500).json({ message: error });
      console.log(error);
    }
  }
};
