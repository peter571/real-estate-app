import { Dispatch } from "redux";
import { propertiesActionTypes } from "../action-types/enums";
import { PropertiesAction } from "../action-types/types/properties";
import { PropertyValues } from '../../types';
import { properties } from "../../api";
import { useAppDispatch } from "../hooks";


export const fetchItems = () => {
    return async (dispatch: Dispatch<PropertiesAction>) => {
        try {
            dispatch<any>(fetchRequest(true, ''));
            const { data } = await properties.fetchProperties();

            dispatch({
                type: propertiesActionTypes.FETCH_ALL,
                payload: data,
            })
            dispatch<any>(fetchRequest(false, "success"));
        } catch (error) {
            dispatch<any>(fetchRequest(false, "errors"));
        }
    }
}

export const fetchRequest = (value: boolean, message: string) => {
    return (dispatch: Dispatch<PropertiesAction>) => {
        dispatch({
            type: propertiesActionTypes.FETCH_REQUEST,
            payload: {
                loading: value,
                feedback: message
            }
        })
    }
}

export const fetchItem = (id: string) => {
    return async (dispatch: Dispatch<PropertiesAction>) => {
        try {
            dispatch<any>(fetchRequest(true, ''));
            const { data } = await properties.fetchProperty(id);

            dispatch({
                type: propertiesActionTypes.FETCH_ITEM,
                payload: data,
            })
            dispatch<any>(fetchRequest(false, "success"));
        } catch (error) {
            console.log(error);
            dispatch<any>(fetchRequest(false, "errors"));
        }
    }
}

export const create = (propertyDetails: PropertyValues) => {
    
    return async (dispatch: Dispatch<PropertiesAction>) => {
        try {
            dispatch<any>(fetchRequest(true, ''));
            const property = await properties.createProperty(propertyDetails)
            dispatch({
                type: propertiesActionTypes.CREATE,
                payload: property
            })

            dispatch<any>(fetchRequest(false, "success"));
        } catch (error) {
            dispatch<any>(fetchRequest(false, "errors"));
        }
    }
}

export const update = (id: string, propertyDetails: PropertyValues) => {
    return async (dispatch: Dispatch<PropertiesAction>) => {
        try {
            dispatch({
                type: propertiesActionTypes.UPDATE,
                payload: propertyDetails
            })
        } catch (error) {

        }
    }
}

export const deleteProperty = (id: string) => {
    return async (dispatch: Dispatch<PropertiesAction>) => {
        try {
            const property: PropertyValues = {} as PropertyValues;

            dispatch({
                type: propertiesActionTypes.DELETE,
                payload: property
            })
        } catch (error) {

        }
    }
}

export const uploadImages = (images: string[]) => {
    return (dispatch: Dispatch<PropertiesAction>) => {
        dispatch({
            type: propertiesActionTypes.LOADIMAGES,
            payload: images
        })
        dispatch<any>(fetchRequest(false, ''));
    }
}
