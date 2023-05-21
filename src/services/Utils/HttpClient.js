import delay from '../../Utils/delay';

import ApiError from '../../Error/ApiError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path) {
    return this.makeRequest(path, { method: 'GET' });
  }

  post(path, body) {
    return this.makeRequest(path, {
      method: 'POST',
      body,
    });
  }

  put(path, body) {
    return this.makeRequest(path, {
      method: 'PUT',
      body,
    });
  }

  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();
    if (options.body) {
      headers.append('Content-type', 'application/json');
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new ApiError(response, responseBody);
  }
}

export default HttpClient;
