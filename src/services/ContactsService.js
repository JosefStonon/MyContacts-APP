import HttpClient from './Utils/HttpClient';

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.HttpClient.get(`/contact?orderBy=${orderBy}`);
  }

  getContactById(id) {
    return this.HttpClient.get(`/contact/${id}`);
  }

  createContact(contact) {
    return this.HttpClient.post('/contact', contact);
  }

  updateContact(id, contact) {
    return this.HttpClient.put(`/contact/${id}`, { body: contact });
  }
}
export default new ContactsService();
