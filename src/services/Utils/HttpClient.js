import delay from '../../Utils/delay';

import ApiError from '../../Error/ApiError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
      body = response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new ApiError(response, body);
  }
}

export default HttpClient;
