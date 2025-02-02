export default function validateQuery(req, res, next) {
  const { search } = req.query;
  if (!search || search.length < 3) {
    return res
      .status(400)
      .json({ error: "Search query must be at least 3 characters long." });
  }
  next();
}
