import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import useLogin from '@/useHooks/useLogin'

const Home: FC = () => {
    const { login } = useLogin()
    const user = useSelector((state: any) => state.userReducer.name)

    return (
        <div className="m-main" onClick={login}>
             my name is: {user}22211
             <Button variant="contained" color="primary">Primary</Button>
        </div>
    )

}
export default Home