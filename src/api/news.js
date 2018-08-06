import axios from 'axios';
import API_ROUTES from 'constants/api-routes';

export function getNews(search, pageNum, pageSize) {
  return axios.get(API_ROUTES.news, {
    params: {
      search,
      pageNum,
      pageSize
    }
  });
}

export function getNewsItem(id) {
  return axios.get(`${API_ROUTES.news}/${id}`);
}
