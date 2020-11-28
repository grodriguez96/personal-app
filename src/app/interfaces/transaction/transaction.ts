import { Type } from '../../enums/transaction/type.enum'

export interface Transaction {

    id: number,
    concept: string,
    amount: number;
    date: string,
    type: Type
}