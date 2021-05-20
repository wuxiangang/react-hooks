
import { useDispatch } from 'react-redux'

const useLogin = () => {
    const dispatch = useDispatch()
    const __ = () => {
        setTimeout(() => {
            dispatch({
                type: 'USERINFO_SET',
                data: { name: 1 }
            })
        }, 1000)
    }
    const login = async () => {
        setTimeout(() => {
            dispatch(__)
        }, 1000)
    }

    const fetchCode = async () => {
        
    }

    return {
        login,
        fetchCode
    }
}
export default useLogin