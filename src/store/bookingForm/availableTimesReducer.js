/* global fetchAPI */
import { UPDATE_DATE } from '../actionTypes';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

export default availableTimesReducer;