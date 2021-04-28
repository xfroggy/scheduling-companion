import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import "./DisplaySequencePage.scss";
import LegCard from "../components/LegCard";
import moment from 'moment';
import DutyPeriod from "../components/DutyPeriod";
import SequenceRelease from "../components/SequenceRelease";
import DetermineLegalLimits from "./DisplayLegalLimitsPage";
import VerifyDutyPeriod from "../components/VerifyDutyPeriod";
import MomentUtils from '@date-io/moment';
import { useParams } from "react-router-dom";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "100",
        backgroundColor: "#01212B",
        width: "100%",
        display: "flex",
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
}));



const DisplaySequencePage = () => {
    const history = useHistory();
    const { sequenceId } = useParams();
    // console.log(sequenceId);
    const { selectedDate, setSelectedDate, selectedSequence, setSelectedSequence, initialTimeStamp, setInitialTimeStamp, selectedDutyPeriod, setSelectedDutyPeriod } = useContext(AppContext)


    const yesRedirect = () => {
        history.push(`/limits`);
    }


    useEffect(() => {
        (async function getSequenceData() {
            const response = await fetch("/data/bid-sheet.json");
            const data = await response.json();

            console.log(data[0].BidMonths[0].Bases[0].Sequences);

            const sequences = data[0].BidMonths[0].Bases[0].Sequences;
            console.log("Here are sequences 2: ", sequences);
            const theSequence = sequences.find((sequence) => sequence.SeqNum === sequenceId.toString());

            console.log("Here's theSequence value: ", theSequence);
            setInitialTimeStamp(new moment());


            // const isGood = theSequence.SequenceOpDates.find((dt) => dt.OpDateID === (selectedDate.date() + 1).toString()
            // )

            theSequence && theSequence.SequenceOpDates.find((dt) => dt.OpDateID === (selectedDate.date() + 1).toString()
            ) ? setSelectedSequence({ currentSequence: theSequence }) : setSelectedSequence({ currentSequence: null });

            //console.log("This sequence operates on this date: ", isGood);

        })();

    }, [])

    const classes = useStyles();
    return (
        // <div className="display-sequence__container">
        <>
            <Box className={classes.root}>
                <Box paddingLeft="1rem">{initialTimeStamp && initialTimeStamp.format('dddd, MMMM Do YYYY')}</Box>

            </Box>
            <DutyPeriod />
            <div className={classes.sequenceContainer}>
                <SequenceRelease />
            </div>
            <div className={classes.sequenceContainer}>
                <VerifyDutyPeriod />
            </div>
            <div className={classes.yesButton}>
                <Button color="secondary" onClick={yesRedirect}>YES</Button>
                <Button color="secondary">NO</Button>

            </div>
            <div className={classes.sequenceContainer}>
                <Box className={classes.root}>
                    {selectedDutyPeriod.currentDutyPeriod && selectedDutyPeriod.currentDutyPeriod.RPTdepLCL}
                </Box>
                {/* <DetermineLegalLimits /> */}
            </div>


            {/* <div className={classes.sequenceContainer}> */}
            {/* <DutyPeriod />
                <LegCard />
                <div className={classes.paddingTop}>
                    <LegCard />
                </div>
                <div className={classes.paddingTop}>
                    <LegCard />
                </div> */}
            {/* <SequenceRelease />
                <div>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker

                            color="secondary"
                            disableToolbar
                            variant="inline"
                            format="MM/DD/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Sequence START date"
                            value={selectedDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>




                <Box className={classes.root}>Sequence from params: {sequenceId}</Box>
                <Box className={classes.root}>Sequence from appContext: {selectedSequence.currentSequence && selectedSequence.currentSequence.SeqNum}</Box>

            </div> */}


        </>
        // </div>


    )

}

export default DisplaySequencePage;