import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'Layout';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
// import { AppBar } from './components/AppBar/AppBar';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from 'components/Loader/Loader.styled';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));
const NotFoundPage = lazy(() => import('./pages/PageNotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    // <b>Refreshing user...</b>
    <Loader>
      <ThreeDots color="lightseagreen" width="50" />
    </Loader>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/" component={<PhoneBookPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
