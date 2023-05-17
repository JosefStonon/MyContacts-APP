/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg.svg';
import edit from '../../assets/images/icons/edit.svg.svg';
import trash from '../../assets/images/icons/trash.svg.svg';
import sad from '../../assets/images/icons/sad.svg';
import box from '../../assets/images/box.svg.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../Components/Loader';
import ContactsService from '../../services/ContactsService';
import Button from '../../Components/Button';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactList = await ContactsService.listContacts(orderBy);

      setHasError(false);

      setContacts(contactList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input value={searchTerm} onChange={handleChangeSearchTerm} type="text" placeholder="Pesquisar por nome..." />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={

            hasError
              ? 'flex-end'
              : (
                contacts.length > 0
                  ? 'space-between'
                  : 'center'
              )
}
      >
        {(!hasError && contacts.length) ? (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}

          </strong>
        ) : null}
        <Link to="/new">Novo contato</Link>

      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (

        <>
          {contacts.length < 1 && !isLoading && (
          <EmptyListContainer>
            <img src={box} alt="box" />

            <p>
              Você ainda não tem nenhum contato cadastrado!
              Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
            </p>
          </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
          <SearchNotFoundContainer>
            <img src={magnifierQuestion} alt="Magnifier Question" />

            <span>
              Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
            </span>
          </SearchNotFoundContainer>
          )}

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
        </>

      )}

    </Container>
  );
}
