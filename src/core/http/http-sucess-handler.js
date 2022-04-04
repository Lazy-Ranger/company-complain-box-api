function httpOK(res, data, statusCode) {
  switch (res.req.method) {
    case "POST":
    case "PUT":
      res.status(201);
      break;

    case "GET":
    case "DELETE":
      res.status(200);
      break;
  }

  return res.json(data);
}

module.exports = {
  httpOK,
};
