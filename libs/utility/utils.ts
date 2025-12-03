import { useFinance } from '@libs/hooks/useFinance'


export async function setTransactionData({email}) {
    const transaction = {
        type: "income",
        category: "Bonus",
        amount: Number(5000),
        date: new Date().toISOString(),
        note: "Bonus for hardwork"
    }

    const res = await fetch("/api/client", {
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify({email : email, transaction : transaction})
    })
    const data = await res.json()

    console.log(data)
}

export async function getTransactionData({email}) {
    const {
        setTransactions,
        setTotalBalance,
        setAccountHealth
    } = useFinance();
    
    const res = await fetch(`/api/client?email=${email}`, {
        method: "GET",
        headers: {"Content-Type" : "application/json"},
    })

    const data = await res.json();

    console.log(data)

    setTransactions(data.user.transactions)
    setTotalBalance(data.user.totalBalance)
    setAccountHealth(data.user.accountHealth)
}

export async function deleteTransactionData({email, id}) {
    const res = await fetch("/api/client", {
        method: "DELETE",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email, id})
    })

    const data = await res.json();

    console.log(data)
}