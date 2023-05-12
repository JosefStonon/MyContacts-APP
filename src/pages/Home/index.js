import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListHeader, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg.svg';
import edit from '../../assets/images/icons/edit.svg.svg';
import trash from '../../assets/images/icons/trash.svg.svg';

import Loader from '../../Components/Loader';
import delay from '../../Utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:3001/contact?orderBy=${orderBy}`);

        await delay(500);
        const json = await response.json();
        setContacts(json);
      } catch (error) {
        console.log('erro', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input value={searchTerm} onChange={handleChangeSearchTerm} type="text" placeholder="Pesquisar por nome..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}

        </strong>
        <Link to="/new">Novo contato</Link>

      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
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
