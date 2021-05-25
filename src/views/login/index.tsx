import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WebHeader from '@/components/WebHeader'

const Home: FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="m-main">
          <WebHeader />
            <span>1223333</span>
             <Button variant="contained" color="primary" aria-haspopup="true" onClick={handleClick}>Primary</Button>
             <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )

}
export default Home