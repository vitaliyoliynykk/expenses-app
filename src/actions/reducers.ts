const initialState = {
    todos: [
        { id: 1, text: 'Eat' },
        { id: 2, text: 'Sleep' },
    ],
    loading: false,
    hasErrors: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const todoReducer = (state = initialState, action: { type: unknown; payload: number }): any => {
    switch (action.type) {
        // case DELETE_TODO:
        //     return {
        //         ...state,
        //         todos: state.todos.filter((todo) => todo.id !== action.payload),
        //     };
        default:
            return state;
    }
};

export default todoReducer;
