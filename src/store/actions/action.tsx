import { DiscountOffers, RestrauntLists } from "../../infrastructure/utils/mockData";
import { DISCOUNT_OFFERS_LIST_SUCCESS, IS_LOADING, RESET_CART, RESTRAUNT_LIST_SUCCESS, UPDATE_CART_SUCCESS } from "../types/types";
export function setLoading(value: boolean) {
    return {
        type: IS_LOADING,
        payload: value
    }
}

export function resetCart() {
    return async (dispatch: any) => {
        dispatch({ type: RESET_CART })
    }
}

export const fetchRestrantsList = (): any => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        try {
            dispatch(setLoading(false));
            dispatch({ type: RESTRAUNT_LIST_SUCCESS, payload: RestrauntLists })
            //we can call the API here but as there is no Server side support we will skip the calling, however structure for that is added into application
        } catch (error) {
            dispatch(setLoading(false))
        }
    }
}

export const fetchDiscountList = (): any => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        try {
            dispatch(setLoading(false));
            dispatch({ type: DISCOUNT_OFFERS_LIST_SUCCESS, payload: DiscountOffers })
            //we can call the API here but as there is no Server side support we will skip the calling, however structure for that is added into application
        } catch (error) {
            dispatch(setLoading(false))
        }
    }
}


export const UpdateCartItems = (item: any, isAddItem: any): any => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        try {
            dispatch(setLoading(false));
            dispatch({ type: UPDATE_CART_SUCCESS, payload: item, isAddItem: isAddItem })
            //we can call the API here but as there is no Server side support we will skip the calling, however structure for that is added into application
        } catch (error) {
            dispatch(setLoading(false))
        }
    }
}


