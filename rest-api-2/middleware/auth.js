import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token)
    return res
      .status(401)
      .json({ error: "Authorizavimo token yra privalomas" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch {
    res.status(401).json({ error: "Uzklausa nepatvirtinta" });
  }
}
