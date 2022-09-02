const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Revenues = mongoose.model(
  "Revenue",
  new Schema(
    {
      origin: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Revenues;
