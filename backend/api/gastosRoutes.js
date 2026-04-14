const express = require("express");
const Gasto = require("../models/Gasto");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, tipo, cantidad, descripcion, fecha } = req.body;
    if (!email || !tipo || cantidad == null || !descripcion || !fecha) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const gasto = new Gasto({ email, tipo, cantidad, descripcion, fecha });
    await gasto.save();

    return res.status(201).json(gasto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const gastos = await Gasto.find({ email: req.params.email }).sort({ _id: -1 });
    return res.json(gastos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
