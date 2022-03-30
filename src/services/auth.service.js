import axios from 'axios';
const API_URL = 'http://localhost:5000/';

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'signin', { email, password })
      .then((response) => {
        return response.data;
      });
  }

  signUp(email, password) {
    return axios.post(API_URL + 'signup', {
      email,
      password,
    });
  }
}

export default new AuthService();
