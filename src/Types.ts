export type TransactionType = {
    id: number
    description: string
    amount: number
    income: boolean
}

export type TransactionHistoryProp = {
    transactions: TransactionType[]
    handleDelete: (id: number) => void
}

export type InfoProp = {
    transactions: TransactionType[]
    setTransactions: (transactions: TransactionType[]) => void
}

export type TransactionProp = {
    id: number
    description: string
    amount: number
    income: boolean
    handleDelete: (id: number) => void
}