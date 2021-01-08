import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

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

//get logs from server
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

//Add new log
export const addLog = (log) => async (dispach) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispach({
      type: ADD_LOG,
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
