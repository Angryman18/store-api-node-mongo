const notFound = (req, res, next) => {
  res.status(404).send("This Route Doesnot Exist");
};

module.exports = notFound;
