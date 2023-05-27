import { Container } from './styles';

import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default Toast" />
      <ToastMessage text="Error Toast" type="danger" />
      <ToastMessage text="Successtoast" type="success" />
    </Container>
  );
}
