import { initializeTimes } from './initializetimes';
import { UPDATE_DATE } from '../actionTypes';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return initializeTimes();
    default:
      return state;
  }
};

export default availableTimesReducer;