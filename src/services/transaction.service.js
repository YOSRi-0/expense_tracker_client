import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://budget-tracker-4123.herokuapp.com/api/';

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
        return response.data;
      });
  }

  deleteOne(transactionId, currentUser) {
    return axios
      .delete(API_URL + 'item/' + transactionId, {
        headers: authHeader(currentUser),
      })
      .then((response) => response.data);
  }
}

export default new TransactionService();
