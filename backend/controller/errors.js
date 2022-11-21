export class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);

    if (this.constructor == BaseError) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

export class ValidationError extends BaseError {
  constructor(message = "Validation Failed", statusCode = 400) {
    super(message, statusCode);
  }
}

export class ExternalServiceError extends BaseError {
  constructor(message, statusCode = 500) {
    super(message, statusCode);
  }
}

export class NotFoundError extends BaseError {
  constructor(message = "Not Found", statusCode = 404) {
    super(message, statusCode);
  }
}
