import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS } from '../actions/actionTypes';

const initialstate = {
    users: [
        { id: 1, name: 'Senthil', username: 'senthil@gmail' },
        { id: 2, name: 'Gaja', username: 'gaja@gmail.com' },
        { id: 3, name: 'Kumar', username: 'kumar@gmail.com' },
    ]

}

export default function (state = initialstate, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.data
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.data]
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(
                    (users, i) => users.id === action.data.id ? { ...users, ...action.data } : users)
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(r => r.id !== action.data)
            }
        default:
            return state;
    }
}