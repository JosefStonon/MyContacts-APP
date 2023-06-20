import HttpClient from './Utils/HttpClient';
import delay from '../Utils/delay';
import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.HttpClient.get(`/contact?orderBy=${orderBy}`);
  }

  async getContactById(id) {
    await delay(3000);
    return this.HttpClient.get(`/contact/${id}`);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.HttpClient.post('/contact', { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.HttpClient.put(`/contact/${id}`, { body });
  }

  deleteContact(id) {
    return this.HttpClient.delete(`/contact/${id}`);
  }
}
export default new ContactsService();
