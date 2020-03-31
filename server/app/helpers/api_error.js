class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

class Unauthorized extends ApiError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

class Forbidden extends ApiError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

class UnprocessableEntity extends ApiError {
  constructor(message = 'Unprocessable Entity') {
    super(message, 422);
  }
}

const handleError = (err, res) => {
  const { status, message } = err;
  res.status(status).json({
    status: 'Error',
    message
  });
};

module.exports = { Unauthorized, Forbidden, UnprocessableEntity, handleError };
