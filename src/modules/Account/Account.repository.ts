import { Inject, Injectable, Logger } from "@nestjs/common";
import { AccountDto } from "./dto/Account.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Accountss } from "src/entities/Account.entity";
import { getManager, Repository } from "typeorm";
import { accountMapper } from "./helper/accountMapper";
import 'dotenv/config';
import { GetAccountDto } from "./dto/getAccount.dto";


@Injectable()
export class AccountRepository {
    constructor(
        @InjectRepository(Accountss) private AccountRepo: Repository<Accountss>,
    ) { }

    async createAccount(AccountDto: AccountDto) {
        return await this.produceAccount(AccountDto)
    }

    private async produceAccount(AccountDto: AccountDto): Promise<any> {
        try {
            let mappingAccount = accountMapper(AccountDto)

            let accountCreateInstance = await this.AccountRepo.create(mappingAccount);
            await this.AccountRepo.save(accountCreateInstance)
            return { isAccountCreate: true }
        } catch (error) {
            console.log(error, 'error');

            return error
        }
    }

    async GetAccount(payload: GetAccountDto) {
        return await this.getuserAccount(payload)
    }

    private async getuserAccount(payload: GetAccountDto): Promise<any> {
        try {
            return await this.AccountRepo.find({ account_id: Number(payload.account_id), consumer_id: Number(payload.consumer_id) });
        } catch (error) {
            console.log(error, 'error');
            return error
        }
    }



}