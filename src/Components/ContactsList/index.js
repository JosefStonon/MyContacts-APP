import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>

      </Header>

      <ListContainer>

        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arow" />
          </button>
        </header>

        <Card>
          ...
        </Card>

      </ListContainer>
    </Container>
  );
}
