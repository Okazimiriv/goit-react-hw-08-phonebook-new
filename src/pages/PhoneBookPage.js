import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactSelectors';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from 'components/Loader/Loader.styled';
import { ErrorMessage } from '../ErorrMessage';
import { Heading } from '@chakra-ui/react';

export default function PhoneBook() {
  // export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Phonebook</title>
      </Helmet> */}
      <Heading fontSize={32} mb={5}>
        Phonebook
      </Heading>
      <ContactForm />
      <Heading fontSize={24} mb={5} mt={10}>
        Contacts
      </Heading>
      <Filter />
      {isLoading && !error && (
        <Loader>
          <ThreeDots color="lightseagreen" width="50" />
        </Loader>
      )}
      <ContactList />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
