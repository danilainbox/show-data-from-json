const initialState = [];

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USERS_SUCCESS':
            return Object.assign([], state, action.exhibits);
    }
    return state;
}

export default usersReducer;
