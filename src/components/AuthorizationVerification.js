import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';



export const AuthorizationVerification = () => {

  let navigate = useNavigate();
  let location = useLocation().pathname;
  const login = useStoreState((state) => state.userData.data.login);
  const password = useStoreState((state) => state.userData.data.password);
  const accessPasswordOTP = useStoreState((state) => state.userData.data.accessPasswordOTP);
  const loginVerifAndPasswordVerif = (typeof login === 'string' && typeof password === 'string') ? login.toLowerCase() === 'kode@kode.ru' && password.toLowerCase() === 'enk0deng' : false;

  useEffect(() => {
    if (login && password) {
      if (loginVerifAndPasswordVerif && !accessPasswordOTP && location !== '/access-password') {
        navigate('/access-password');
      } else if (loginVerifAndPasswordVerif && accessPasswordOTP && (location === '/' || location === '/auth' || location === '/access-password')) {
        navigate('/pokemon-list');
      }
    } else if (location !== '/' && location !== '/auth') {
      navigate('/auth');
    }
  }, []);
  return null;
}