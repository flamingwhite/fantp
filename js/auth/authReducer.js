import { authActions, signup } from './authActions';

const { SIGN_UP, SIGN_IN, SIGN_OUT } = authActions;


const defaultState = {
    _id: null,
    username: null,
    email: null,
    token: null
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGN_UP.SUCCESS:
            return {
                ...state,
                _id: action._id,
                username: action.username,
                email: action.email,
                token: action.token
            };
        case SIGN_UP.ERROR:
            return {
                ...defaultState
            };
        case SIGN_IN.SUCCESS:
            return {
                ...state,
                _id: action._id,
                username: action.username,
                email: action.email,
                token: action.token
            };
        case SIGN_IN.ERROR:
            return {
                ...defaultState
            };
        case SIGN_OUT.SUCCESS:
            return {
                ...defaultState
            };
        default:
            return state;
    }
}

export default authReducer;
