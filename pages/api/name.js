// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../data/Names.json";
export default (req, res) => {
  res.status(200).json(data);
};
