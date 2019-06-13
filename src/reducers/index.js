import { FETCH_ALL_STUDENTS, FETCH_SINGLE_STUDENT, FETCH_ALL_CAMPUSES, FETCH_SINGLE_CAMPUS } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case FETCH_SINGLE_STUDENT:
      return action.payload;
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    case FETCH_SINGLE_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};
