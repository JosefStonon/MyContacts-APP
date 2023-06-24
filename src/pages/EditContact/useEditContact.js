import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState, useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../Utils/toast';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

export default function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactRefForm = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(
          id,
        );

        safeAsyncAction(() => {
          contactRefForm.current.setFieldValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch {
        safeAsyncAction(() => {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado',
          });
        });
      }
    }
    loadContact();
  }, [id, history, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(
        id,
        contact,
      );

      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactRefForm,
    handleSubmit,

  };
}
