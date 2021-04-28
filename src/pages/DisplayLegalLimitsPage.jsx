import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import FindTodaysDP from '../components/Helpers/FindTodaysDP';
import { makeStyles } from '@material-ui/core/styles';
import TransformTime from "../components/Helpers/TransformTime";
import DutyLimits from "../components/Helpers/DutyLimits";


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "100",
        backgroundColor: "#01212B",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#FFFFFF",
        padding: "1rem",
    },
    paddingTop: {
        paddingTop: ".5rem"
    },
    yesButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fullPage: {
        height: "100vh",
    },


}));


const DisplayLegalLimitsPage = () => {
    const classes = useStyles();
    const { selectedDate, setSelectedDate, selectedSequence, setSelectedSequence, initialTimeStamp, setInitialTimeStamp, selectedDutyPeriod, setSelectedDutyPeriod } = useContext(AppContext)





    return (
        <div className={classes.fullPage}>
            <Box className={classes.root}>

                {/* {selectedDutyPeriod.currentDutyPeriod.RPTdepHBT} */}
                {DutyLimits()}
            </Box>
        </div>

    )
}

export default DisplayLegalLimitsPage;