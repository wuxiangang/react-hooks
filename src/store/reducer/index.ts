import { combineReducers } from 'redux'

const userReducer = (state = {}, action: anyObject) => {
    switch (action.type) {
        case 'USERINFO_SET':
            state = { ...state, ...action.data }
            return state
        case 'USERINFO_CLEAR':
            return state = {}
    }
    return state
}

export default combineReducers({
    userReducer
})
