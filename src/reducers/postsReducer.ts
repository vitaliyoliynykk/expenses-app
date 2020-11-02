export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postsReducer = (state = initialState, action: { type: any }): any => {
    switch (action.type) {
        default:
            return state;
    }
};

export default postsReducer;
