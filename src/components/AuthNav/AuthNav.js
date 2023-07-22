// import { NavLink } from 'react-router-dom';
import { LinkWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <LinkWrap to="/register">Register</LinkWrap>
      <LinkWrap to="/login">Log In</LinkWrap>
    </div>
  );
};
