const links = require("../links.json")


module.exports = (req, res) => {
  const origin = req.headers.origin;

  const allowedOrigins = [
    "https://www.crocera.art",
    "https://crocera.art"
  ];
  
  if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Methods", "GET_OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  }

  res.status(200).json(links);
};
