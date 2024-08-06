function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      code = 400;
      message = err.errors[0].message;
      break;

    case "required-email":
      code = 400;
      message = "Email is required";
      break;

    case "required-password":
      code = 400;
      message = "Password is required";
      break;

    case "invalid-user":
      code = 401;
      message = "Error invalid email or password";
      break;

    case "invalid-token":
    case "JsonWebTokenError":
      code = 401;
      message = "Error authentication";
      break;

    case "forbidden-access":
      code = 403;
      message = "Forbidden error at authorization";
      break;

    case "not-found":
      code = 404;
      message = "Data not found";
      break;

    default:
      code = 500;
      message = "Internal server error";
      break;
  }

  res.status(code).json({ message });
}

module.exports = errorHandler;
