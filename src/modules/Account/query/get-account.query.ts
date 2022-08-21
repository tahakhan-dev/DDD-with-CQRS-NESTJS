import { IQuery } from '@nestjs/cqrs';
import { GetAccountDto } from '../dto/getAccount.dto';

export class GetAccountQuery implements IQuery {
    public constructor(
        public readonly param: GetAccountDto,
    ) { }
}
