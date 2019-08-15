const {
  homeHandler,
  publicHandler,
  getDataHandler,
  postHandler,
  postRegister,
  loginPageHandler
} = require("./handler");

const passwordHandling = require("../encryption/password-handling");

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  // if (endpoint === "/") {
  //   homeHandler(req, res);
  // }
  if (endpoint === "/") {
    loginPageHandler(req, res);
  } else if (endpoint.includes("public")) {
    publicHandler(req, res, endpoint);
  } else if (endpoint === "/post-bugbear") {
    postHandler(req, res);
  } else if (endpoint === "/get-info") {
    getDataHandler(req, res, endpoint);
  } else if (endpoint === "/login") {
    setToken(req, res, userInfo, secretKey);
  } else if(endpoint === "/logout") {
    removeToken(req, res);
  } else if (endpoint === "/register") {
    postRegister(req, res);
    // passwordHandling.logPw(hashPassword);

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>File not found </h1>");
  }
};

module.exports = router;
