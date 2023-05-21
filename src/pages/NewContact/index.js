import PageHeader from '../../Components/PageHeader';

import ContactForm from '../../Components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function HandleSubmit(formdata) {
    const contact = {
      name: formdata.name,
      email: formdata.email,
      phone: formdata.phone,
      category_id: formdata.category_id,
    };
    const response = await ContactsService.createContact(contact);

    console.log(response);
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
