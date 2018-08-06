import axios from 'axios';
import API_ROUTES from 'constants/api-routes';

export function sendFeedback(values) {
  return axios.post(API_ROUTES.feedback, values);
}
