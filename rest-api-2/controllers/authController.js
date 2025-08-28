import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Reikia email ir password" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "El. paštas užimtas" });

    const u = new User({ email });
    await u.setPassword(password);
    await u.save();

    res.json({ msg: "OK" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const u = await User.findOne({ email });
    if (!u || !(await u.validatePassword(password))) {
      return res.status(401).json({ error: "Neteisingi duomenys" });
    }

    const token = jwt.sign({ id: u._id, email: u.email }, process.env.SECRET, {
      expiresIn: "3h",
    });

    res.json({ token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
