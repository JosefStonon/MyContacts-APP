import PageHeader from '../../Components/PageHeader';
import ContactForm from '../../Components/ContactForm';
import Loader from '../../Components/Loader';

import useEditContact from './useEditContact';

export default function EditContact() {
  const {
    isLoading,
    contactName,
    contactRefForm,
    handleSubmit,

  } = useEditContact();
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando' : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactRefForm}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
