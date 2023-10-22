import {
  ListItem,
  ListItemWrapper,
  ListItemInfo,
  ListItemButton,
} from './ContactListItem.styled';
import { useContactsContext } from '../Context/Context';

export const ContactListItem = () => {
  const { filteredContacts, deleteContact } = useContactsContext();
  return filteredContacts.map(contact => (
    <ListItem key={contact.id}>
      <ListItemWrapper>
        <ListItemInfo>
          {contact.name}: {contact.number}
        </ListItemInfo>
        <ListItemButton onClick={() => deleteContact(contact.id)}>
          Delete
        </ListItemButton>
      </ListItemWrapper>
    </ListItem>
  ));
};