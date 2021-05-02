import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import LegCard from "./LegCard";
import TransformTime from "./Helpers/TransformTime";
import { generateKey } from 'fast-key-generator';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        borderRadius: "5px 5px 0 0",
        minWidth: 320,
        display: "flex",
        justifyContent: "space-between",
        color: "#FFFFFF",
        backgroundColor: "#9575cd",
        marginTop: "1rem"

    },
    seqDate: {
        fontSize: 14,
        opacity: 1,
        fontFamily: "Montserrat",
        fontWeight: "500",
        textDecoration: "none",
        padding: ".5rem",
        "&:last-child": {
            paddingBottom: ".5rem"
        }
    },

    title: {
        fontSize: 14,
        fontFamily: "Montserrat",
        textTransform: "uppercase",
        fontWeight: "500",
        padding: ".5rem",
        "&:last-child": {
            paddingBottom: ".5rem"
        }
    },
}));


export default function DutyPeriods() {
    const classes = useStyles();
    const { selectedDate, selectedSequence } = useContext(AppContext);

    // for each duty period, render a duty period header, then flight legs

    return (
        <div key={generateKey()} className="dutyPeriod">
            {selectedSequence.currentSequence && selectedSequence.currentSequence.DutyPeriods.map((dp) => {
                return (
                    <>
                        {/* Render Duty Period header */}
                        <Box key={dp.id} className={classes.root}>
                            <div className={classes.title}>
                                SEQ {selectedSequence.currentSequence.SeqNum}
                            </div>
                            <div className={classes.title}>
                                {moment(selectedDate).add(parseInt(dp.DPnum) - 1, "days").format('ddd DDMMMYY')}

                            </div>
                            <div className={classes.title}>
                                REP {
                                    TransformTime(dp.RPTdepLCL)
                                }
                            </div>
                        </Box>

                        {/* Render duty period flight legs */}
                        {dp.Legs.map((leg) => {
                            return <LegCard key={leg.id} leg={leg} />
                        })}

                    </>
                )
            })}
        </div>
    );
}
