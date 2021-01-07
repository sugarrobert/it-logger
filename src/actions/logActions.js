import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// export const getLogs = () => {
//   return async (dispach) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispach({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

export const getLogs = () => async (dispach) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispach({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispach({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
