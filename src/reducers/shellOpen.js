import { TOGGLE_SHELL } from '../constants';

export default (state = false, { type }) => {
    switch (type) {
    case TOGGLE_SHELL:
        return !state;
    default:
        return state;
    }
};
