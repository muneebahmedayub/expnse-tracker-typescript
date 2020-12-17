import { RefObject } from "react"

export type HeaderProp = {
    HeaderRef: RefObject<HTMLDivElement>
}
export type TransactionType = {
    id: number
    description: string
    amount: number
    income: boolean
}

export type TransactionHistoryProp = {
    addToRef: (el: RefObject<HTMLDivElement>) => void
    transactions: TransactionType[]
    handleDelete: (id: number, ObjRef: RefObject<HTMLDivElement>) => void
    TransactionHistoryRef: RefObject<HTMLDivElement>
}

export type InfoProp = {
    transactions: TransactionType[]
    setTransactions: (transactions: TransactionType[]) => void
    InfoRef: RefObject<HTMLDivElement>
    allRef: RefObject<HTMLDivElement[]>
}

export type TransactionProp = {
    addToRef: (el: RefObject<HTMLDivElement>) => void
    id: number
    description: string
    amount: number
    income: boolean
    handleDelete: (id: number, ObjRef: RefObject<HTMLDivElement>) => void
}