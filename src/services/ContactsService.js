import HttpClient from './Utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    const contacts = await this.HttpClient.get(`/contact?orderBy=${orderBy}`);

    return contacts.map(ContactMapper.toDomain);
  }

  async getContactById(id) {
    const contact = await this.HttpClient.get(`/contact/${id}`);

    return ContactMapper.toDomain(contact);
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
