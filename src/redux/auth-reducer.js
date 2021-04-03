import { authAPI } from "./../components/api/api"


const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTHORIZATION_ERROR = 'SET_AUTHORIZATION_ERROR'


let initState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    authorizationError: null,
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, isFetching: action.isFetching, ...action.data,
            }
        }
        case SET_AUTHORIZATION_ERROR: {
            return {
                ...state, authorizationError: true,
            }
        }
        default: return state
    }
}



export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })
export const setAuthorizationError = () => ({ type: SET_AUTHORIZATION_ERROR })


export const getAuthUserData = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            let { id, login, email } = data.data
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.loginMe(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else dispatch(setAuthorizationError())
    })
}

export const logout = () => (dispatch) => {
    authAPI.logoutMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}