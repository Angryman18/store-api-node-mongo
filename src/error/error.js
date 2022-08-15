class CustomError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

const errorResponse = (message, status) => {
  return new CustomError(message, status);
};

module.exports = { CustomError, errorResponse };
