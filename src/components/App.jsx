import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/phonebookReducer'
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactItem/ContactItem';
import Filter from './Phonebook/Filter/Filter';
import css from './App.module.css';

const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleChangeFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

    const filteredContacts = getFilteredContacts();

    return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        onAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChangeFilter={handleChangeFilter}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
export default App;