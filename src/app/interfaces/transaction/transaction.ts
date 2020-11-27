export enum Type {

    DEPOSIT = 0,
    WITHDRAWALS = 1
}

export interface Transaction {

    id: number,
    concept: string,
    amount: number;
    date: string,
    type: Type
}