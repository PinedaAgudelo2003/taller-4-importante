const mongoose = require("mongoose");

const gastoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gasto", gastoSchema);
