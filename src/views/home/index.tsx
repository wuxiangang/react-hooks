import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Button, Paper, Typography, GridList, GridListTile } from '@material-ui/core'
import useLogin from '@/useHooks/useLogin'
import WaveHeader from '@/components/WaveHeader'
import WaveFooter from '@/components/WaveFooter'
import WebHeader from '@/components/WebHeader'
import '@/assets/css/home.less'

const Home: FC = () => {
    const { login } = useLogin()
    const user = useSelector((state: any) => state.userReducer.name)

    return (
        <div className="m-main" onClick={login}>
            <WebHeader />
            <section>
                <div className="u-banner-box">
                    <Paper elevation={3} className="u-banner-paper container-fluid ps-md-center">
                    <GridList cellHeight={374} spacing={100}>
                        <GridListTile>
                            <Typography variant="h4" gutterBottom>
                                Hello! Do U Know Us? Click here and know more.
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            </Typography>
                            <Button variant="contained" color="primary" size="large" style={{marginTop: '4rem'}} fullWidth>
                                click here and know more
                            </Button> 
                        </GridListTile>
                        <GridListTile>
                            <img src="https://material-ui.com/static/images/grid-list/olive.jpg" alt="" />
                        </GridListTile>
                    </GridList>  
                    </Paper>
                </div>
                <WaveHeader />
            </section>
             my name is: {user}
             <Button variant="contained" color="primary">Primary</Button>
             <WaveFooter />
        </div>
    )

}
export default Home