import apiUnsplash from './apiUnsplash';

const SECTIONS_PATH = '/collections?page=1&perPage=10&orderBy=latest';

export default (success) =>
  apiUnsplash(SECTIONS_PATH)
    .then(res => res.json())
    .then(data => success(data));
