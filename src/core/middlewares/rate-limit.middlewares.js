const rateLimitReq = require("express-rate-limit");

const rateLimit = rateLimitReq({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs,
  message: "Too many requests, please try again after some time",
});

module.exports = { rateLimit };
