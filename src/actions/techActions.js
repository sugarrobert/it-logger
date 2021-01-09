import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

//get tech from server
export const getTechs = () => async (dispach) => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispach({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispach({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
