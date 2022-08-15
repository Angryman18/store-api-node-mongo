const { CustomError } = require("../error/error");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({msg: err.message});
  }
  return res.status(500).json({ msg: err?.message || "Something Went Wrong, Please Try Again!" });
};

module.exports = errorMiddleware;
