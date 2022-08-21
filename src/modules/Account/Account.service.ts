import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AccountCommand } from './commands/Account.command';
import { AccountDto } from './dto/Account.dto';
import { GetAccountDto } from './dto/getAccount.dto';
import { GetAccountQuery } from './query/get-account.query';

@Injectable()
export class AccountService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }
  async CreateAccountServiceHandler(AccountDto: AccountDto) {
    return await this.commandBus.execute(
      new AccountCommand(AccountDto),
    );
  }

  async getAccountServiceHandler(GetAccountDto: GetAccountDto) {
    return await this.queryBus.execute(
      new GetAccountQuery(GetAccountDto),
    );
  }


}
