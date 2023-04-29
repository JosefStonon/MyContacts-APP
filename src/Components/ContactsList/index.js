import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg.svg';
import edit from '../../assets/images/icons/edit.svg.svg';
import trash from '../../assets/images/icons/trash.svg.svg';

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
          <div className="info">

            <div className="contact-name">
              <strong>Josef Sartori</strong>
              <small>Instalgram</small>
            </div>
            <span>josef@gmail.com</span>
            <span>(14) 99826-073</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">

            <div className="contact-name">
              <strong>Josef Sartori</strong>
              <small>Instalgram</small>
            </div>
            <span>josef@gmail.com</span>
            <span>(14) 99826-073</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">

            <div className="contact-name">
              <strong>Josef Sartori</strong>
              <small>Instalgram</small>
            </div>
            <span>josef@gmail.com</span>
            <span>(14) 99826-073</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
