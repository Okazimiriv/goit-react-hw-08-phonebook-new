// import { ReactComponent as DeleteIcon } from '../../icons/remove.svg';
// import { DeleteButton } from '../ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';
import { selectIsLoading } from 'redux/contacts/contactSelectors';
import { IoClose } from 'react-icons/io5';
import {
  ContactListBlock,
  ContactItem,
  ContactInfo,
  ContactName,
  Button,
  Text,
} from './ContactList.styled';

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {!isLoading && contacts.length === 0 && (
        <Text textAlign="center">There are no any contacts ...😕 </Text>
      )}
      <ContactListBlock>
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
              <ContactInfo>
                {name}:<ContactName>{number}</ContactName>
              </ContactInfo>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                <IoClose size={32} fill="teal" />
              </Button>
            </ContactItem>
          ))}
      </ContactListBlock>
    </>
  );
};

export default ContactList;
