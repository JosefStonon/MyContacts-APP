import PropTypes from 'prop-types';

import PageHeader from '../../Components/PageHeader';
import ContactForm from '../../Components/ContactForm';
import Loader from '../../Components/Loader';

export default function Presentation({
  isLoading,
  contactName,
  contactRefForm,
  onSubmit,
}) {
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando' : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactRefForm}
        buttonLabel="Salvar alterações"
        onSubmit={onSubmit}
      />
    </>
  );
}

Presentation.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  contactName: PropTypes.string.isRequired,
  contactRefForm: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
};
