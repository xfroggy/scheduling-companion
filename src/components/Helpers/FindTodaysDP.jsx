import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import TransformTime from "./TransformTime";

const FindTodaysDP = () => {

    const { selectedDate, selectedSequence, selectedDutyPeriod, setSelectedDutyPeriod, initialTimeStamp, setTypesData } = useContext(AppContext)

    useEffect(() => {
        (async function getTypes() {
            // read and set sequence types data to determine which type current sequence is
            const response = await fetch("/data/types.json");
            const data = await response.json();
            setTypesData(data);

            // using current time stamp for date, find and set the currentDutyPeriod out of the sequence duty periods.

            // in actual use, the following line will calculate the difference between sequence start date and current time stamp in order to find which duty period to examine for current legalities.  For example testing, I have statically set this to the duty period at array position [1].
            // const currentDP = initialTimeStamp.diff(selectedDate, "days");

            //substitute code for currentDP for example testing
            const currentDP = 1;

            selectedSequence.currentSequence && setSelectedDutyPeriod(
                { currentDutyPeriod: selectedSequence.currentSequence.DutyPeriods[currentDP] }
            );
        })();

    }, [selectedSequence, initialTimeStamp, selectedDate, setSelectedDutyPeriod, setTypesData])

    return (
        <>
            Did you report today at {selectedDutyPeriod.currentDutyPeriod && TransformTime(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL)} in {selectedDutyPeriod.currentDutyPeriod && selectedDutyPeriod.currentDutyPeriod.Legs[0].DEPcity}?
        </>

    )
}

export default FindTodaysDP;