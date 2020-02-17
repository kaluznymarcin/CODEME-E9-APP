export const UNSPLASH_BASE_URL = "https://api.unsplash.com";
export const UNSPLASH_COLLECTIONS_URL_SNIPET = '/collections?page=1&per_page=10&order_by=latest&client_id=';
export const UNSPLASH_ACCESS_KEY = "3f664ef5e4273eb908008a62f5bb36a44010ddbd641644700adac1dcd8a48e49";

// collections page
export const UNSPLASH_COLLECTIONS_URL = UNSPLASH_BASE_URL + UNSPLASH_COLLECTIONS_URL_SNIPET + UNSPLASH_ACCESS_KEY;

// single collections page
export const SINGLE_COLLECTION = UNSPLASH_BASE_URL + '/collections/'
export const COLLECTION_ORDER_ACCESS = '/photos?page=1&perPage=20&orderBy=latest&client_id=' + UNSPLASH_ACCESS_KEY

export const UNSPLASH_AUTHORIZATION = `Client-ID ${UNSPLASH_ACCESS_KEY}`;
export const UNSPLASH_COMMON_HEADERS = {
    Authorization: UNSPLASH_AUTHORIZATION
};

/* 'https://api.unsplash.com'

'/collections/12345?page=1&per_page=10&order_by=latest&client_id='
 */

