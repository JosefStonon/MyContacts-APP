import PageHeader from '../../Components/PageHeader';

import ContactForm from '../../Components/ContactForm';
import useNewContact from './useNewContact';

export default function NewContact() {
  const {
    contactRefForm,
    HandleSubmit,
  } = useNewContact();

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
