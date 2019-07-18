import {todosRef} from '../firebase';
const FETCH_TODOS = 'FETCH_TODOS';
const IS_FETCHING_TODOS = 'IS_FETCHING_TODOS';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};

export const updateToDo = updatedCourse => async dispatch => {
    todosRef.child(updatedCourse.id).update({
        ...updatedCourse,
        link: 'editxxx',
    })
};

export const removeCourse = courseId => async dispatch => {
    console.log('removeCourse courseId : ' + courseId);
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