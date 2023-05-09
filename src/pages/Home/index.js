import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg.svg';
import edit from '../../assets/images/icons/edit.svg.svg';
import trash from '../../assets/images/icons/trash.svg.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contact')
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  console.log(contacts);
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar por nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>

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
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
