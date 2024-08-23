import * as actionTypes from '../types/types';
import _ from 'lodash';
const initialState = {
	isLoading: false,
	restrauntListsData: [],
	discountOffersData: [],
	cartITems: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case actionTypes.RESTRAUNT_LIST_SUCCESS:
			return {
				...state,
				restrauntListsData: action.payload
			};

		case actionTypes.DISCOUNT_OFFERS_LIST_SUCCESS:
			return {
				...state,
				discountOffersData: action.payload
			};

		case actionTypes.UPDATE_CART_SUCCESS:
			const updatedCartItem = getUpdatedCartItems(action, state);
			return {
				...state,
				cartITems: updatedCartItem
			};
		case actionTypes.RESET_CART:
			return {
				...state,
				cartITems: []
			};

		default:
			return state;
	}
}



const getUpdatedCartItems = (actionParam, state) => {
	let currentCartITems = state.cartITems;
	const selectedItem = actionParam.payload;
	const isItemfound = !!currentCartITems?.filter((el) => el.title == selectedItem?.title)?.length;
	let firstIteratorTempArray = []
	if (!!actionParam.isAddItem) {
		if (isItemfound) {
			currentCartITems = currentCartITems?.map(cartItem => {
				if (cartItem.title == selectedItem?.title) {
					return { ...cartItem, quantity: cartItem.quantity + 1 };
				} else {
					return cartItem;
				}
			});
		} else {
			firstIteratorTempArray.push(selectedItem)
			currentCartITems = [...currentCartITems, ...firstIteratorTempArray];

		}
	} else {
		if (isItemfound) {
			const selectedItemFromCart = currentCartITems.filter((el) => el.title == selectedItem.title);
			if (selectedItemFromCart[0].quantity > 1) {
				currentCartITems = currentCartITems?.map(cartItem => {
					if (cartItem.title == selectedItem?.title) {
						return { ...cartItem, quantity: cartItem.quantity - 1 };
					} else {
						return cartItem;
					}
				});
			} else {
				currentCartITems = currentCartITems?.filter((el) => { return el.title != selectedItem?.title });
			}
		}
	}
	return currentCartITems;
}
export default reducer;