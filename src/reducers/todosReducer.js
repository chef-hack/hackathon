const defaultTodo = {
    isFetching: false,
    data: [],
}
const todos = (state = defaultTodo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'IS_FETCHING_TODOS':
            console.log('state in reducer IS_FETCHING_TODOS')
            console.log(state)
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_TODOS':
            console.log('state FETCH_TODOS');
            console.log(state);
            return {
                ...state,
                data: action.payload,
                isFetching: false,
            };
        default:
            return state
    }
};

export default todos;