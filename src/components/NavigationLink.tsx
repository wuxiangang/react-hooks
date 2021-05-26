import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Paper, MenuItem, MenuList } from '@material-ui/core'
import { NavigationOpt } from '@/types/global.d'

const NavigationLink: FC<NavigationOpt.NavigationLinkOpt> = ({ items }) => {
    const history = useHistory()
    return (
        <>
        {
            items.map((item) => {
                const { title, subList, pathname } = item
                return <Link
                    to = { pathname || null }
                    className="u-nav-title"
                    key = {title}
                >
                    { title }
                    { subList && <Paper className="u-menu-paper ps-top-center t-64">
                        <Grid container>
                            {
                                subList.map(subItem => {
                                    const { title, children } = subItem
                                    return <Grid className="u-sub-item" key={title} item xs>
                                            <MenuList autoFocusItem={true}>
                                                <MenuItem>{ title }</MenuItem>
                                                {
                                                    children.map(child => {
                                                        const { title, pathname } = child
                                                        return <MenuItem 
                                                            className="jss-theme-btn"
                                                            key={title}
                                                            selected={history.location.pathname === pathname}
                                                        >
                                                            <Link to={pathname}>{ title }</Link>
                                                        </MenuItem>
                                                    })
                                                }
                                            </MenuList>
                                        </Grid>
                                })
                            }
                        </Grid>
                    </Paper>
                }   
                </Link>
            })
        }
        </>
    )
}

export default NavigationLink