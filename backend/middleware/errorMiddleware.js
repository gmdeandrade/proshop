const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // pass error to error handler
};

const errorHandler = (err, req, res, next) => {
  // if error status code is 200, set to 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //check for mongoose bad ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    err.message = "Invalid ID";
    statusCode = 400;
  }

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
