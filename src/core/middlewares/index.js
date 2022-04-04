module.exports = {
  ...require("./authorized-token.middlewares"),
  ...require("./rate-limit.middlewares"),
};
