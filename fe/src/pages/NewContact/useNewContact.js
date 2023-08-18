import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';

import toast from '../../Utils/toast';

export default function useNewContact() {
  const contactRefForm = useRef(null);
  async function HandleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactRefForm.current.resetField(contact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return {
    contactRefForm,
    HandleSubmit,
  };
}
