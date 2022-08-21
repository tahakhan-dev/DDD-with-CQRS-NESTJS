import { IsNotEmpty } from 'class-validator';

export class GetAccountDto {
    @IsNotEmpty()
    account_id: number;

    @IsNotEmpty()
    consumer_id: number;
}
