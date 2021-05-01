import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/AppContext';
import TransformTime from '../components/Helpers/TransformTime';

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Montserrat",
        fontWeight: "100",
        display: "flex",
        justifyContent: "flex-end",
        color: "#FFFFFF",
        width: "95%",
        minWidth: 320,
    },

    title: {
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: "200",
        padding: ".5rem",
        "&:last-child": {
            paddingBottom: ".5rem"
        }
    },
}));

export default function SequenceRelease() {
    const classes = useStyles();
    const { selectedSequence } = useContext(AppContext)

    // get last duty period release data as sequence release time

    let currentDPrelease = selectedSequence.currentSequence && selectedSequence.currentSequence.DutyPeriods[selectedSequence.currentSequence.DutyPeriods.length - 1].RLSarrHBT;
    selectedSequence.currentSequence && (currentDPrelease = TransformTime(currentDPrelease));

    return (
        <Box className={classes.root}>
            <div className={classes.title}>
                SEQUENCE RELEASE {currentDPrelease}
            </div>
        </Box>
    );
}
