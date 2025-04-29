export class CustomError extends Error {
  status: number;
  constructor(status = 500, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}