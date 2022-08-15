const asyncWrapper = require("./async-wrapper");
const { errorResponse } = require("../error/error");

const getAllProduct = asyncWrapper(async (req, res, next) => {
// throw errorResponse('Hello', 500);
throw new Error()
//   return res.status(200).json({ msg: "This is product route" });
});

module.exports = { getAllProduct };
