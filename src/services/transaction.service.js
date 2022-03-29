import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:5000/api/';

class TransactionService {
  createOne(transaction, currentUser) {
    return axios
      .post(API_URL + 'item', transaction, {
        headers: authHeader(currentUser),
      })
      .then((response) => {
        return response.data;
      });
  }

  getMany(currentUser) {
    return axios
      .get(API_URL + 'item', { headers: authHeader(currentUser) })
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}

export default new TransactionService();
