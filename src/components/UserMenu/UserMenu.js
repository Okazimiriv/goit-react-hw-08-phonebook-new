import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, Username, Button } from './UserMenu.styled';
import { IoIosLogOut } from 'react-icons/io';
import { FcBusinessman } from 'react-icons/fc';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <FcBusinessman size={32} />
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <IoIosLogOut size={32} fill="teal" />
      </Button>
    </Wrapper>
  );
};
