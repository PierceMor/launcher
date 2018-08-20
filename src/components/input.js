import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FileLoader from './fileLoader';

const styles = {
    container: {
        display: 'flex',
        margin: 20,
        flexWrap: 'wrap',
    },
    input: {
        padding: 20,
    }, 
};


function Inputs(props) {
    
    const { classes } = props;
    return (
        <div className={classes.container}>

            <h1>
                Create your Own Profile Here
            </h1>

            <Input 
                style={{ width: '25%' }}
                placeholder='Full Name'
                className={classes.input}
                inputProps={{
                    'aria-label' : 'Description',
                }}
            />


            <FileLoader />


            <Input 
                style={{ width: '100%', }}
                placeholder='Describe Yourself'
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