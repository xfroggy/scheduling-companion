import React, { createContext, useState } from 'react'


export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const [manDEPcity, setManDEPcity] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSequence, setSelectedSequence] = useState(
        { currentSequence: null }
    );
    const [selectedDutyPeriod, setSelectedDutyPeriod] = useState({
        currentDutyPeriod: null
    });
    const [selectedSequenceId, setSelectedSequenceId] = useState(null);
    const [leg, setLeg] = useState(null);
    const [initialTimeStamp, setInitialTimeStamp] = useState(null);
    const [typesData, setTypesData] = useState(null);
    return (
        <AppContext.Provider value={{
            manDEPcity, setManDEPcity,
            selectedDate, setSelectedDate,
            selectedSequence, setSelectedSequence, selectedDutyPeriod, setSelectedDutyPeriod, selectedSequenceId, setSelectedSequenceId,
            leg, setLeg,
            initialTimeStamp, setInitialTimeStamp, typesData, setTypesData
        }}>
            {children}
        </AppContext.Provider>
    )
}