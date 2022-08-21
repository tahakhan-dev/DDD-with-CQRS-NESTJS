import { IsNotEmpty } from 'class-validator';

export class AccountDto {
    @IsNotEmpty()
    account_id: number;

    @IsNotEmpty()
    consumer_id: number;

    @IsNotEmpty()
    active: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    bank_name: string;

    @IsNotEmpty()
    net_amount_total: number;

}
