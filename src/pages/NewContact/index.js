import { useRef } from 'react';
import PageHeader from '../../Components/PageHeader';

import ContactForm from '../../Components/ContactForm';
import ContactsService from '../../services/ContactsService';

import toast from '../../Utils/toast';

export default function NewContact() {
  const contactRefForm = useRef(null);
  async function HandleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactRefForm.current.resetField(contact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
        ref={contactRefForm}
        buttonLabel="Cadastrar"
        onSubmit={HandleSubmit}
      />
    </>
  );
}
