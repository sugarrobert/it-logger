import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';

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
      payload: err.response.statusText,
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
      payload: err.response.statusText,
    });
  }
};

//delete logs from server
export const deleteLog = (id) => async (dispach) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispach({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispach({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//update logs from server
export const updateLog = (log) => async (dispach) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispach({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispach({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//search server logs
export const searchLogs = (text) => async (dispach) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispach({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispach({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
