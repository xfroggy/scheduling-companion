import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TransformTime from "./Helpers/TransformTime";


const useStyles = makeStyles({
    root: {
        width: "95%",
        minWidth: 320,
        borderRadius: "0 0 5px 5px",
        marginBottom: ".5rem"
    },

    paddingReset: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },

    flightCard: {
        border: 0,

        boxShadow: 'none',
        display: "flex"
    },

    flight__times: {
        width: "50%",
        padding: 0,
        paddingTop: 16,
        '&:last-child': {
            paddingBottom: ".5rem"
        }
    },

    flight__details: {
        fontSize: 11,
        paddingLeft: ".5rem"
    },

    hour: {
        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "500",
        paddingLeft: "2rem"
    },

    flight__city: {
        fontSize: 12,
        paddingLeft: ".5rem"
    },

    thick: {
        height: 7
    },

    title: {
        padding: ".5rem",
        fontSize: 14,
    },

});



export default function LegCard(props) {
    const classes = useStyles();
    const { selectedDate, setSelectedDate, selectedSequence, setSelectedSequence, //selectedDutyPeriod, setSelectedDutyPeriod 
        leg, setLeg
    } = useContext(AppContext);

    return (

        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.paddingReset}>
                <Typography className={classes.title} color="textSecondary" >
                    Flight {
                        props.leg.FLTnum
                    }
                </Typography>
                <Divider />
                <Card className={classes.flightCard}>
                    <CardContent className={classes.flight__times}>
                        <Typography className={classes.flight__details} color="textSecondary" >
                            Depart
                        </Typography>
                        <Typography className={classes.hour}>
                            {TransformTime(props.leg.DEPlcl)}

                        </Typography>
                        <Typography className={classes.flight__city}>
                            {props.leg.DEPcity}
                        </Typography>
                    </CardContent>
                    <Divider orientation='vertical' flexItem />
                    <CardContent className={classes.flight__times}>
                        <Typography className={classes.flight__details} color="textSecondary" >
                            Arrive
                        </Typography>
                        <Typography className={classes.hour}>
                            {TransformTime(props.leg.ARRlcl)}
                        </Typography>
                        <Typography className={classes.flight__city}>
                            {props.leg.ARRcity}
                        </Typography>
                    </CardContent>
                </Card>
                <Divider className={classes.thick} />
                <Typography className={classes.title}>
                    Block {props.leg.LEGblock}
                </Typography>
            </CardContent>
        </Card>


    );
}
