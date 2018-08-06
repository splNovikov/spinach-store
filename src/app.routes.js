import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AboutPage,
  ContactsPage,
  HomePage,
  RecipePage,
  RecipesPage,
  ProductsPage,
  ProductPage,
  NewsPage,
  NewsItemPage,
  ArticlesPage,
  ArticlePage
} from 'pages';
import PAGES from 'constants/pages';

const routes = (
  <Switch>
    <Route exact path={PAGES.LIST.news.to}        component={NewsPage}     />
    <Route path={`${PAGES.LIST.news.to}/:id`}     component={NewsItemPage} />
    <Route exact path={PAGES.LIST.about.to}       component={AboutPage}    />
    <Route exact path={PAGES.LIST.products.to}    component={ProductsPage} />
    <Route path={`${PAGES.LIST.product.to}/:id`}  component={ProductPage}  />
    <Route exact path={PAGES.LIST.articles.to}    component={ArticlesPage} />
    <Route path={`${PAGES.LIST.articles.to}/:id`} component={ArticlePage}  />
    <Route exact path={PAGES.LIST.recipes.to}     component={RecipesPage}  />
    <Route path={`${PAGES.LIST.recipe.to}/:id`}   component={RecipePage}   />
    <Route exact path={PAGES.LIST.contacts.to}    component={ContactsPage} />
    <Route exact path={PAGES.LIST.home.to}        component={HomePage}     />
  </Switch>
);

export default routes;
