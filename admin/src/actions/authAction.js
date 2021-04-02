

export const checkLogin = () => {
    return {
        type: 'CHECK_LOGIN',
        data: localStorage.getItem('auth')
    };
}
