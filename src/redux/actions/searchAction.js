import { SEARCH_INGREDIENTS } from './types';



export default (searchData) => {
	return {
		type: SEARCH_INGREDIENTS,
		payload: searchData
	};
};
