/* eslint-disable react/jsx-one-expression-per-line */
import { Container } from './styles';

import box from '../../../../assets/images/box.svg.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={box} alt="box" />

      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
