"use client"
import React, {
    createContext,
    useContext,
    useState
} from 'react'


const FinanceContext = createContext(undefined);

export function FinanceProvider({children} : {children : React.ReactNode}) {
    const [transactions, setTransactions] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [accountHealth, setAccountHealth] = useState("stable");

    return (
        <FinanceContext.Provider value={
            {
                transactions, 
                totalBalance, 
                accountHealth,
                setTransactions,
                setTotalBalance,
                setAccountHealth

                }} >

            {children}
        </FinanceContext.Provider>
    )
}

export const useFinance = () => {
    const context = useContext(FinanceContext)
    if(!context) {
        throw new Error("Finance context not defined")
    }

    return context
}