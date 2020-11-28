import { Type } from '../../enums/transaction/type.enum'

export interface Transaction {

    id: number,
    concept: string,
    amount: number;
    transactionDate: string,
    type: Type
    creationDate: string,
}