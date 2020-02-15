import {
  UNSPLASH_BASE_URL,
  UNSPLASH_COMMON_HEADERS
} from '../constants';

export default (path) => fetch(
  `${UNSPLASH_BASE_URL}${path}`,
  {
    headers: UNSPLASH_COMMON_HEADERS
  }
)
