import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListHeader, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg.svg';
import edit from '../../assets/images/icons/edit.svg.svg';
import trash from '../../assets/images/icons/trash.svg.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contact?orderBy=${orderBy}`)
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  console.log(orderBy);

  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar por nome..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}

        </strong>
        <Link to="/new">Novo contato</Link>

      </Header>

      <ListHeader orderBy={orderBy}>

        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arow" />
        </button>
      </ListHeader>

      {contacts.map((contact) => (
        <Card
          key={contact.id}
        >
          <div className="info">

            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (

                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">

            <Link to={orderBy}>

              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
