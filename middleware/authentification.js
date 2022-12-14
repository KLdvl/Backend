// External requires
const jwt = require("jsonwebtoken");

// Method for checking Id using stored token
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    console.log(decodedToken)
    const userId = decodedToken.userId;
    console.log(userId)
    console.log(req.auth)
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valide";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ err: "Requête non authentifiée" });
  }
};
