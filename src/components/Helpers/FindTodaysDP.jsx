import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import TransformTime from "./TransformTime";

const FindTodaysDP = () => {

    const { selectedDate, setSelectedDate, selectedSequence, selectedDutyPeriod, setSelectedDutyPeriod, setSelectedSequence, initialTimeStamp, setInitialTimeStamp, typesData, setTypesData } = useContext(AppContext)

    useEffect(() => {
        (async function getTypes() {
            const response = await fetch("/data/types.json");
            const data = await response.json();

            console.log("Here's the data from types: ", data);
            setTypesData(data);



            // const sequences = data[0].BidMonths[0].Bases[0].Sequences;
            // console.log("Here are sequences 2: ", sequences);
            // const theSequence = sequences.find((sequence) => sequence.SeqNum === sequenceId.toString());

            // console.log("Here's theSequence value: ", theSequence);
            // setInitialTimeStamp(new moment());


            // // const isGood = theSequence.SequenceOpDates.find((dt) => dt.OpDateID === (selectedDate.date() + 1).toString()
            // // )

            // theSequence && theSequence.SequenceOpDates.find((dt) => dt.OpDateID === (selectedDate.date() + 1).toString()
            // ) ? setSelectedSequence({ currentSequence: theSequence }) : setSelectedSequence({ currentSequence: null });

            //console.log("This sequence operates on this date: ", isGood);
            const currentDP = 1;


            console.log("difference between initial and selected is: ", currentDP);
            console.log("The data I'm trying to set for Duty Period: ", selectedSequence.currentSequence && selectedSequence.currentSequence.DutyPeriods[currentDP]);

            selectedSequence.currentSequence && setSelectedDutyPeriod(
                { currentDutyPeriod: selectedSequence.currentSequence.DutyPeriods[currentDP] }
            );



            // setSelectedDutyPeriod(selectedSequence.currentSequence.DutyPeriods[currentDP])


        })();

    }, [selectedSequence])



    const getDP = (dp) => {

        typesData && console.log("Here's the typesData after setting: ", typesData);
        return selectedSequence.currentSequence;
    }


    //const currentDP = initialTimeStamp.diff(selectedDate, "days");


    initialTimeStamp && console.log("inital is: ", initialTimeStamp);
    console.log("selected is: ", selectedDate);

    selectedDutyPeriod.currentDutyPeriod && console.log("The selectedDutyPeriod after setting: ", selectedDutyPeriod.currentDutyPeriod)


    // console.log("Here's the DP: ", getDP(currentDP));

    // const dpType = selectedSequence.currentSequence && selectedSequence.currentSequence.DutyPeriods[currentDP].Legs.find((leg) => {
    //     const currentType = types.find((type) => Station === leg.DEPcity)
    // })


    // return (

    //          `selectedDutyPeriod.currentDutyPeriod &&
    //            Did you report today at ${TransformTime(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL)} in ${selectedDutyPeriod.currentDutyPeriod.Legs[0].DEPcity}?`

    // )

    return (
        <>

            Did you report today at {selectedDutyPeriod.currentDutyPeriod && TransformTime(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL)} in {selectedDutyPeriod.currentDutyPeriod && selectedDutyPeriod.currentDutyPeriod.Legs[0].DEPcity}?
        </>

    )
}

export default FindTodaysDP;