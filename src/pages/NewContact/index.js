import PageHeader from '../../Components/PageHeader';

import ContactForm from '../../Components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function HandleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato!');
    }
  }
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={HandleSubmit}
      />
    </>
  );
}
