export class ApiError {
  readonly code: number;
  readonly title: string;
  readonly message: string;
  constructor({
    code,
    message,
    title,
  }: {
    code: number;
    title: string;
    message: string;
  }) {
    this.code = code;
    this.title = title;
    this.message = message;
  }
}
