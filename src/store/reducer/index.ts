import { combineReducers } from 'redux'

const userReducer = (state = {}, action: anyObject) => {
    switch (action.type) {
        case 'USERINFO_SET':
            state = { ...state, ...action.data }
            break
        case 'USERINFO_CLEAR':
            state = {}
            break
    }
    return state
}

export default combineReducers({
    userReducer
})
