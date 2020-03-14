import apiUnsplash from './apiUnsplash';
import fillPath from '../utils/fillPath';

const defaultParams = {
};

const SECTION_PATH = '/photos/:id';

export default (urlParams, success) =>
  apiUnsplash(
    fillPath(SECTION_PATH, {...defaultParams, ...urlParams})
  )
  .then(res => res.json())
  .then(data => success(data));
