
export default (state = [], action) => {
    switch (action.type) {
        case 'CHECK_LOGIN':
            return {
                ...state,
                loggedIn: action.data
            }
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.data
            }
        case 'REGISTER':
            return {
                ...state,
                loggedIn: action.data
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedOut: action.data
            }
        case 'ERR':
            return {
                ...state,
                err: action.data
            }
        default:
            return state
    }
}