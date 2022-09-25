import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie'; //Nos ayuda asignar a nuestro navegador las cookies que esté recibiendo en el momento de la autenticación
import axios from 'axios';
import endPoints from '@services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  // con fetch:
  //   const signIn = async (email, password) => {
  //     const response = await fetch(endPoints.auth.login, {
  //         method: 'POST',
  //         headers: {
  //             accept: '*/*',
  //             'Content-Type': 'application/json;charset=utf-8',
  //         },
  //         body: JSON.stringify({ email, password }),
  //     });
  //     const data = await response.json();

  //con axios:

  const sigIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

    if (access_token) {
      Cookie.set('token', access_token.access_token, { expires: 5 }); //'nombre'.'verdadero_access_token'
    }
  };

  return {
    user,
    sigIn,
  };
}
