import Moment from 'moment';

import { getRegionFromStorage } from './region';


export function isDevelopmentEnv(env) {
  return env.toLowerCase() === 'development'
    || env.toLowerCase() === 'develop';
}

export function isProductionEnv(env) {
  return env.toLowerCase() === 'production'
    || env.toLowerCase() === 'prod';
}

export function getRelativeTime(timeStamp) {
  const regionCode = getRegionFromStorage();

  return Moment(timeStamp).locale(regionCode).fromNow();
}
