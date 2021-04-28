import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import LegCard from "../components/LegCard";
import TransformTime from "./Helpers/TransformTime";

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

// const convertTime = (timeString) => {
//     timeString.splice(-2,":")
// }

export default function DutyPeriod() {
    const classes = useStyles();
    const { selectedDate, setSelectedDate, selectedSequence, setSelectedSequence, //selecteDutyPeriod, setSelectedDutyPeriod 
        leg, setLeg
    } = useContext(AppContext);
    console.log("Here's the selectedDate: ", moment(selectedDate).format('ddd DDMMMYY'));

    return (
        <div className="dutyPeriod">


            {selectedSequence.currentSequence && selectedSequence.currentSequence.DutyPeriods.map((dp) => {
                return (
                    <>
                        <Box className={classes.root}>
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

                        {dp.Legs.map((leg) => {
                            console.log("Here's the leg: ", leg);
                            return <LegCard leg={leg} />
                        })}

                    </>
                )
            })}
        </div>
    );
}
