import _ from 'lodash';

const PAGES = {
  home: {
    label: 'app.pages.home',
    to: '/'
  },
  news: {
    label: 'app.pages.news',
    to: '/news'
  },
  about: {
    label: 'app.pages.about',
    to: '/about'
  },
  products: {
    label: 'app.pages.products',
    to: '/products'
  },
  // todo: we do not need /product path = use /products instead
  product: {
    label: 'app.pages.product',
    to: '/product'
  },
  articles: {
    label: 'app.pages.articles',
    to: '/articles'
  },
  recipes: {
    label: 'app.pages.recipes',
    to: '/recipes'
  },
  // todo: we do not need /recipe path = use /recipes instead
  recipe: {
    label: 'app.pages.recipe',
    to: '/recipe'
  },
  contacts: {
    label: 'app.pages.contacts',
    to: '/contacts'
  }
};

const omitPages = [PAGES.recipe, PAGES.product];

export default {
  LIST: PAGES,
  NAV_PAGES: _.filter(_.map(PAGES), page => {
    return !_.includes(omitPages, page);
  })
};
