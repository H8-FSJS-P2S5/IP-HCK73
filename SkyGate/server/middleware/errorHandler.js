function errorHandler(err, req, res, next) {
    let status;
    let message;
    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400;
            message = err.errors[0].message;
            break;
        case "invalid-input":
            status = 400;
            message = 'Invalid Input'
            break;
        case "invalid-user":
            status = 401;
            message = 'Invalid email or password'
            break;
        case "invalid-token":
        case "JsonWebTokenError":
            status = 401;
            message = "Access denied. Login required";
            break;
        case "forbidden":
            status = 403;
            message = "Forbidden";
            break;
        case "airport-not-found":
            status = 404;
            message = 'Airport not found'
            break;
        default:
            status = 500;
            message = "Internal Server Error"
            break;
    }
    res.status(status).json({ message })
}

module.exports = errorHandler