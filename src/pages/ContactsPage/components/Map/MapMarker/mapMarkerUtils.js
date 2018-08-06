import image from 'assets/images/spinach-logo.png';

export const getMarkerImages = (env, googleApi) => {
  return getImages(
    image,
    googleApi,
    { basicW: 30, basicH: 30 },
    { scaledW: 35, scaledH: 35 });
};

function getImages(url, googleApi, { basicW, basicH }, { scaledW, scaledH }) {
  return {
    basic: getImage(url, googleApi, basicW, basicH),
    scaled: getImage(url, googleApi, scaledW, scaledH)
  };
}

function getImage(url, googleApi, w, h) {
  return {
    url,
    scaledSize: new googleApi.Size(w, h)
  };
}
