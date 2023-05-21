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

  async post(path, body) {
    await delay(500);

    const headers = new Headers({
      'Content-type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    let responsebody = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
      responsebody = await response.json();
    }

    if (response.ok) {
      return responsebody;
    }

    throw new ApiError(response, responsebody);
  }
}

export default HttpClient;
