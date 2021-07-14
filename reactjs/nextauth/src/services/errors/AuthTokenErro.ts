export class AuthTokenErro extends Error {
  constructor() {
    super('Error with authentication token.')
  }
}