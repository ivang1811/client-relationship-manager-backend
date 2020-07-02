const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  description: String,
  date_added: {
    type: Date,
    default: Date.now,
  },
  assignees: Array,
  relationship_score: Number,
});

module.exports = mongoose.model("Clients", ClientSchema);
