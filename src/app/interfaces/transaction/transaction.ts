import { Type } from '../../enums/transaction/type.enum'

export interface Transaction {

    id: number,
    concept: string,
    amount: number;
    transaction_date: string,
    type: Type
    created_date: string,
}