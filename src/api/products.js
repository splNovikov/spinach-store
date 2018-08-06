import axios from 'axios';
import API_ROUTES from 'constants/api-routes';

export function getProducts(search, pageNum, pageSize, sortBy, sortDirection) {
  return axios.get(API_ROUTES.products, {
    params: {
      search,
      pageNum,
      pageSize,
      sortBy,
      sortDirection
    }
  });
}

export function getProduct(id) {
  return axios.get(`${API_ROUTES.products}/${id}`);
}
