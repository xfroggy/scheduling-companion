import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import FindTodaysDP from '../components/Helpers/FindTodaysDP';
import { makeStyles } from '@material-ui/core/styles';
import TransformTime from "./Helpers/TransformTime";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        borderRadius: "5px 5px 0 0",
        minWidth: 320,
        display: "flex",
        justifyContent: "space-between",
        color: "#FFFFFF",
        backgroundColor: "#169bf0",
        marginTop: "1rem"

    },

    title: {
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: ".5rem",
        "&:last-child": {
            paddingBottom: ".5rem"
        }
    },
}));

const VerifyDutyPeriod = () => {
    const classes = useStyles();
    const { selectedDate, setSelectedDate, selectedSequence, setSelectedSequence, initialTimeStamp, setInitialTimeStamp } = useContext(AppContext)

    return (
        <>
            <Box className={classes.root}>
                <FindTodaysDP />
                {/* Did you report today at {selectedSequence.currentSequence && TransformTime(selectedSequence.currentSequence.DutyPeriods[FindTodaysDP()].RPTdepLCL)}? */}
            </Box>
        </>
    )
}

export default VerifyDutyPeriod;

//in {selectedSequence.currentSequence.DutyPeriods[FindTodaysDP()].Legs[0].DEPcity}