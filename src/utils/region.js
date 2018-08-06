export function getRegionFromStorage() {
  return window.localStorage.getItem('regionCode');
}

export function setRegionToStorage(regionCode) {
  window.localStorage.setItem('regionCode', regionCode);
}
