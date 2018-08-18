import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BurgerMenu from './menu';


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
    },
    title: {
        float: 'right',
    }
};

function Header(props){
    const { classes } = props; 
    return ( 
        <div className={classes.root}>
            <AppBar className={classes.appbar} color='inherit' aria-label='Menu' >
                <Toolbar variant="dense" >
                        <BurgerMenu />
                    <Typography variant="title" className={classes.title} >
                        Pierce Morrill
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )//return
}//Header

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)