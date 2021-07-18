import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import DutyPeriods from "../components/DutyPeriods";
import SequenceRelease from "../components/SequenceRelease";
import VerifyDutyPeriod from "../components/VerifyDutyPeriod";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "100",
        backgroundColor: "#01212B",
        display: "flex",
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
        minHeight: "100vh",
    },
}));

const DisplaySequencePage = () => {
    const history = useHistory();
    const { sequenceId } = useParams();
    const { selectedDate, setSelectedSequence, setInitialTimeStamp } = useContext(AppContext)

    const yesRedirect = () => {
        history.push(`/limits`);
    }


    useEffect(() => {
        (async function getSequenceData() {

            // read data from json file

            const response = await fetch("/data/bid-sheet.json");
            const data = await response.json();

            // search sequences for user entered sequence

            const sequences = data[0].BidMonths[0].Bases[0].Sequences;
            const theSequence = sequences.find((sequence) => sequence.SeqNum === sequenceId.toString());

            // set timestamp to get current date

            setInitialTimeStamp(new moment());
            //set current sequence to state if it exists and operating date exists or redirect

            theSequence && selectedDate && theSequence.SequenceOpDates.find((dt) => dt.OpDateID === (selectedDate.date() + 1).toString()
            ) ? setSelectedSequence({ currentSequence: theSequence }) : history.push(`/sequence/${sequenceId}/edit`);

        })();

    }, [history, selectedDate, sequenceId, setInitialTimeStamp, setSelectedSequence])

    const classes = useStyles();
    return (
        <div className={classes.fullPage}>
            <Box className={classes.root}>
                <Box >
                    {/* Dummy data for walk through example */}
                    Monday, May 17, 2021

                    {/* Use below in real time application */}
                    {/* {initialTimeStamp && initialTimeStamp.format('dddd, MMMM Do YYYY')} */}
                </Box>

            </Box>
            <DutyPeriods />
            <div className={classes.sequenceContainer}>
                <SequenceRelease />
            </div>
            <div className={classes.sequenceContainer}>
                <VerifyDutyPeriod />
            </div>
            <div className={classes.yesButton}>
                <Button color="primary" onClick={yesRedirect}>CONFIRM</Button>
            </div>
        </div>
    )
}

export default DisplaySequencePage;