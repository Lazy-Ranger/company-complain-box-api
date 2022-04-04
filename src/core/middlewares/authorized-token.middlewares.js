const { JwtService } = require("../jwt");

function authorizedToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      res.status(401).send("Unauthorized");
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
      res.status(401).send("Unauthorized");
    }

    const user = JwtService.verify(token);
    req.user = user;
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
}

module.exports = { authorizedToken };
