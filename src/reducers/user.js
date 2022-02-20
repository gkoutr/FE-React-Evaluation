export default function user(state = initialUserState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                userName: action.username
            }
        default:
            return state;
    }
}

const initialUserState = {
    userName: ''
};
