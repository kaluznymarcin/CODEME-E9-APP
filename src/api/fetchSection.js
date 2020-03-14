import apiUnsplash from './apiUnsplash';
import fillPath from '../utils/fillPath';

const defaultParams = {
  page: 1,
  perPage: 10,
  orderBy: 'latest'
};

const SECTION_PATH = '/collections/:id/photos?page=:page&perPage=:perPage&orderBy=:orderBy';

export default (urlParams, success) =>
  apiUnsplash(
    fillPath(SECTION_PATH, {...defaultParams, ...urlParams})
  )
    .then(res => res.json())
    .then(data => success(data));
