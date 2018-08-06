import axios from 'axios';
import API_ROUTES from 'constants/api-routes';

export function getArticles(search, pageNum, pageSize) {
  return axios.get(API_ROUTES.articles, {
    params: {
      search,
      pageNum,
      pageSize
    }
  });
}

export function getArticle(id) {
  return axios.get(`${API_ROUTES.articles}/${id}`);
}
