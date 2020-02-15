import apiUnsplash from './apiUnsplash';

const SECTION_PATH = '/collections/:id/photos?page=1&perPage=10&orderBy=latest';

export default (urlParams, success) =>
  apiUnsplash(
    fillPath(SECTION_PATH, urlParams)
  )
    .then(res => res.json())
    .then(data => success(data));
