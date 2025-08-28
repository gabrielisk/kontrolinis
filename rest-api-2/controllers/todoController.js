import Todo from "../models/Todo.js";

export async function list(req, res) {
  const todos = await Todo.find({ owner: req.user.id }).sort({ createdAt: -1 });
  res.json(todos);
}

export async function create(req, res) {
  const text = (req.body.text || "").trim();
  if (!text) return res.status(400).json({ error: "text required" });
  const t = await Todo.create({ text, owner: req.user.id });
  res.status(201).json(t);
}

export async function update(req, res) {
  const t = await Todo.findOneAndUpdate(
    { _id: req.params.id, owner: req.user.id },
    req.body,
    { new: true }
  );
  if (!t) return res.status(404).json({ error: "Not found" });
  res.json(t);
}

export async function remove(req, res) {
  const t = await Todo.findOneAndDelete({
    _id: req.params.id,
    owner: req.user.id,
  });
  if (!t) return res.status(404).json({ error: "Not found" });
  res.json({ ok: true });
}
