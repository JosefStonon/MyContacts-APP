import {
  useEffect, useState, useCallback, startTransition,
} from 'react';
import ContactsService from '../../services/ContactsService';

import toast from '../../Utils/toast';

export default function useHomeContact() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);

  // const filteredContacts = useMemo(() => contacts.filter((contact) => (
  //  contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactList = await ContactsService.listContacts(orderBy);

      setHasError(false);

      setContacts(contactList);

      setFilteredContacts(contactList);
    } catch {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }, []);

  function handleChangeSearchTerm(event) {
    const { value } = event.target;

    setSearchTerm(value);

    startTransition(() => {
      setFilteredContacts(contacts.filter((contact) => (
        contact.name.toLowerCase().includes(value.toLowerCase())
      )));
    });
  }

  function handleTryAgain() {
    loadContacts();
  }

  const handleDeleteContact = useCallback((contact) => {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) => prevState.filter((contact) => (
        contact.id !== contactBeingDeleted.id)));
      handleCloseDeleteModal();
      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }
  return {
    isPending: false,
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
    orderBy,
  };
}
