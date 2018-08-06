import { all, fork } from 'redux-saga/effects';
import { watchAddHttpError } from './httpErrorHandler/saga';
import { watchLoadProducts } from './products/saga';
import { watchLoadProduct } from './product/saga';
import { watchSendFeedback, watchLoadContacts, watchLoadGoogleApi } from './contacts/saga';
import { watchLoadRecipes } from './recipes/saga';
import { watchLoadRecipe } from './recipe/saga';
import { watchLoadNews } from './news/saga';
import { watchLoadNewsItem } from './newsItem/saga';
import { watchLoadArticles } from './articles/saga';
import { watchLoadArticle } from './article/saga';


export default function* root() {
  yield all([
    // http error handler:
    fork(watchAddHttpError),
    // products:
    fork(watchLoadProducts),
    // product:
    fork(watchLoadProduct),
    // contacts:
    fork(watchSendFeedback),
    fork(watchLoadContacts),
    fork(watchLoadGoogleApi),
    // recipes:
    fork(watchLoadRecipes),
    // recipe:
    fork(watchLoadRecipe),
    // news:
    fork(watchLoadNews),
    fork(watchLoadNewsItem),
    // articles:
    fork(watchLoadArticles),
    fork(watchLoadArticle)
  ]);
}
