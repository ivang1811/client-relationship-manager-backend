const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Get back all posts
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    console.log(clients);
    console.log("HEKKLLSDASD");
    res.json(clients);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get specific post
router.get("/:clientid", async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientid);
    res.json(client);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a specific client
router.delete("/:clientid", async (req, res) => {
  try {
    const removedClient = await Client.remove({ _id: req.params.clientid });
    res.json(removedClient);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a client

router.patch("/:clientid", async (req, res) => {
  try {
    const updatedPost = await Client.updateOne(
      { _id: req.params.clientid },
      { $set: { name: req.body.name } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a post
router.post("/", async (req, res) => {
  const client = new Client({
    name: req.body.name,
    tags: req.body.tags,
    description: req.body.description,
    date_added: req.body.date_added,
    assignees: req.body.assignees || [],
    relationship_score: 50,
  });
  try {
    const savedClient = await client.save();
    res.json(savedClient);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
