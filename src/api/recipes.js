import axios from 'axios';
import API_ROUTES from 'constants/api-routes';

export function getRecipes(search, pageNum, pageSize, sortBy, sortDirection) {
  return axios.get(API_ROUTES.recipes, {
    params: {
      search,
      pageNum,
      pageSize,
      sortBy,
      sortDirection
    }
  });
}

export function getRecipe(id) {
  return axios.get(`${API_ROUTES.recipes}/${id}`);
}
