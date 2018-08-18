import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: '9%',
    }, 
};

function Inputs(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Input 
                placeHolder='Full Name'
                className={classes.input}
                inputProps={{
                    'aria-label' : 'Description',
                }}
            />
            <Input 
                placeHolder='Describe Yourself'
                className={classes.input}
                inputProps={{
                    'aria-label' : 'Description',
                }}
            />
        </div>
    ) //return
}//Inputs

Inputs.propTypes={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);