import { articles } from "../../../data";

export default function hundler(req, res) {
  res.status(200).json(articles);
}
