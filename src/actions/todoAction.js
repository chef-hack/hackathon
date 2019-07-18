import {todosRef} from '../firebase';
const FETCH_TODOS = 'FETCH_TODOS';
const IS_FETCHING_TODOS = 'IS_FETCHING_TODOS';
const FETCH_COURSE_BY_ID = 'FETCH_COURSE_BY_ID';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};

export const updateToDo = updatedCourse => async dispatch => {
    todosRef.child(updatedCourse.id).update({
        ...updatedCourse,
        link: 'editxxx',
    })
};

export const getCourseById = courseId => async dispatch => {
    dispatch({
        type: FETCH_COURSE_BY_ID,
        payload: {
            courseId: courseId,
        }
    });
};

export const removeCourse = courseId => async dispatch => {
    todosRef.child(courseId).remove();
};

export const completeToDo = completeToDo => async dispatch => {
    todosRef.child(completeToDo).remove();
};

export const fetchToDos = () => async dispatch => {
    dispatch({
        type: IS_FETCHING_TODOS,
        payload: {
            isFetching: true
        }
    });
    todosRef.on("value", snapshot => {
        console.log('snapshot.val()');
        console.log(snapshot.val());
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};