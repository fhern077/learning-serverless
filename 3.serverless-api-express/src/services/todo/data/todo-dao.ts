import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface ITodoDAOConfig {
  baseUrl: string;
}

/**
 *
 * The TodoService class provides convenience methods for
 * accessing and modifying todo list items.
 *
 */
class TodoDataAccess {
  private client: AxiosInstance;
  /**
   * Obtain a newly configured instance of the TodoService.
   *
   * @param {ITodoConfig} config
   * The Connector configuration values.
   *
   * @returns {TodoDataAccess}
   *
   */
  constructor(config: ITodoDAOConfig) {
    this.client = Axios.create({
      timeout: 45000,
      proxy: false
    });
  }

  public async retrieveTodoById() {}

  public async retrieveAllTodos() {}

  private sanitizeResponse(httpResponse: any) {
    let httpResponseResult = httpResponse;
    if (httpResponseResult === undefined) {
      httpResponseResult = {
        status: 503,
        data: { message: "HTTP request returned an undefined result." }
      };
    }
    if (httpResponseResult.status === undefined) {
      httpResponseResult.status = 503;
    }

    return httpResponseResult;
  }
}

export default TodoDataAccess;
