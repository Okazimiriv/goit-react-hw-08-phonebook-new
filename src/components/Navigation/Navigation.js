// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { LinkWrap } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkWrap to="/">Home</LinkWrap>
      {isLoggedIn && <LinkWrap to="/contacts">Phonebook</LinkWrap>}
    </nav>
  );
};
