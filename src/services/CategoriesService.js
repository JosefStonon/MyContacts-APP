import HttpClient from './Utils/HttpClient';

class CategoriesService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listCategories() {
    return this.HttpClient.get('/category');
  }
}
export default new CategoriesService();
