import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const WithState = toRenderProps(withState( 'anchorEl', 'updateAnchorEl', null ));

function BurgerMenu() {
    return (
        <WithState>
            {({ anchorEl, updateAnchorEl }) => {
                const open = Boolean(anchorEl);
                const handleClose = () => {
                    updateAnchorEl(null);
                };

                return (
                    <React.Fragment>

                        <Button
                            aria-owns={open ? 'render-props-menu' : null }
                            aria-haspopup="true"
                            onClick={event => {
                                updateAnchorEl(event.currentTarget);
                            }}
                            >
                            <MenuIcon />
                        </Button>

                        <Menu id='render-props-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>

                            <MenuItem onClick={handleClose} className={window.location.pathname === '/' ? 'active nav-link' : 'nav-link' } > 
                                <Link to='/' >
                                    Create Profile
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={handleClose} className={window.location.pathname === '/allUsers' ? 'active nav-link' : 'nav-link' } >
                                <Link to='/allUsers' >
                                    All Users 
                                </Link>
                            </MenuItem>

                        </Menu>

                    </React.Fragment>
                )
            }} 

        </WithState>
    )//return
} // burgerMenu

export default BurgerMenu;