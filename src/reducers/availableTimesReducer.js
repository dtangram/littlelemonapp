import { initializeTimes } from '../consts/initializetimes';
import { UPDATE_DATE } from '../consts/actionTypes';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return initializeTimes();
    default:
      return state;
  }
};

export default availableTimesReducer;