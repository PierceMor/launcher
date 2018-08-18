import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
        
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
    appbar: {
        position: "static",
        color: 'orange',
    },
};

function Header(props){
    const { classes } = props; 
    return ( 
        <div className={classes.root}>
            <AppBar className={classes.appbar} >
                <Toolbar variant="dense" >
                    <IconButton className={classes.menuButton} color='black' aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title">
                        Your Name here
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )//return
}//Header

Header.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)