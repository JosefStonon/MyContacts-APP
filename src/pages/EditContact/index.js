import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState, useRef } from 'react';
import PageHeader from '../../Components/PageHeader';
import ContactForm from '../../Components/ContactForm';
import ContactService from '../../services/ContactsService';
import Loader from '../../Components/Loader';
import toast from '../../Utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactRefForm = useRef(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactService.getContactById(
          id,
        );
        contactRefForm.current.setFieldValues(contact);
        setIsLoading(false);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado',
        });
      }
    }
    loadContact();
  }, [id, history]);
  function handleSubmit() {
    //
  }
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title="Josef Sartori"
      />

      <ContactForm
        ref={contactRefForm}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
