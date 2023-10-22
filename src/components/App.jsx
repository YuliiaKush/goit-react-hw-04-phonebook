import { Context } from './Context/Context';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Container, TitleHone, TitleHtwo } from './App.styled';

export const App = () => {
  return (
    <Context>
      <Container>
        <TitleHone>Phonebook</TitleHone>
        <ContactForm />
        <TitleHtwo>Contacts</TitleHtwo>
        <ContactFilter />
        <ContactList />
      </Container>
    </Context>
  );
};