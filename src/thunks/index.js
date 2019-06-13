import axios from 'axios';
import { FETCH_ALL_STUDENTS, FETCH_SINGLE_STUDENT, FETCH_ALL_CAMPUSES, FETCH_SINGLE_CAMPUS } from '../actions';

// ACTION CREATORS;
const fetchStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students
  }
}

const fetchStudent = (student) => {
  return {
    type: FETCH_SINGLE_STUDENT,
    payload: student
  }
}

const fetchCampuses = (campuses) => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses
  }
}

const fetchCampus = (campus) => {
  return {
    type: FETCH_SINGLE_CAMPUS,
    payload: campus
  }
}

// THUNK CREATORS;
export const fetchStudentsThunk = () => (dispatch) => {
  return axios
    .get("http://localhost:5000/api/students")
    .then(res => res.data)
    .then(students => dispatch(fetchStudents(students)))
    .catch(err => console.log(err));
}

export const fetchStudentThunk = (studentId) => (dispatch) => {
  return axios
    .get(`http://localhost:5000/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => dispatch(fetchStudent(student)))
    .catch(err => console.log(err));
}

export const fetchCampusesThunk = () => (dispatch) => {
  return axios
    .get("http://localhost:5000/api/campuses")
    .then(res => res.data)
    .then(campuses => dispatch(fetchCampuses(campuses)))
    .catch(err => console.log(err));
}

export const fetchCampusThunk = (campusId) => (dispatch) => {
  return axios
    .get(`http://localhost:5000/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => dispatch(fetchCampus(campus)))
    .catch(err => console.log(err));
}
