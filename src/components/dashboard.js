import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = { 

    card : {
        width: 600,
        height: 600,
    },
    meia: {
        height: 0,
        paddingTop: '56%',
    },
};

function Dashboard(props){

    const { classes } = props;

    return (
        <div >
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    title='User Picture'
                />

                <CardContent>

                    <Typography gutterBottom variant='headline' component='h2'>
                        USER NAME HERE
                    </Typography>

                    <Typography component='p'>
                        USER DESCRIPTION HERE 
                    </Typography>

                </CardContent>

            </Card>
        </div>   
    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);