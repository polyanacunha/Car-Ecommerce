import { LOGIN_ENDPOINT } from './apiConfig';

const authService = {
  login: async (username, password) => {
    console.trace({ username: username });
    try {
      const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          "email": username,
          "password": password
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao fazer login');
      }

      const data = await response.json(); 
      const token = data.token;
      const expiration = data.expiration;
      console.log({ token: token });

      return { token, expiration };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert("Erro ao fazer login");
    }
  },
};

export default authService;
