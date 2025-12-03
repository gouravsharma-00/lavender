export default async function TransactionData({email}) {
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